from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import firewallruleconfig
from . import firewallruleconfig

class FirewallRulesInboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"

class FirewallRulesOutboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"


@dataclass_json
@dataclass
class FirewallRules:
    inbound: Optional[List[firewallruleconfig.FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound' }})
    inbound_policy: Optional[FirewallRulesInboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_policy' }})
    outbound: Optional[List[firewallruleconfig.FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound' }})
    outbound_policy: Optional[FirewallRulesOutboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_policy' }})
    
class FirewallStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    DELETED = "deleted"


@dataclass_json
@dataclass
class Firewall:
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    rules: Optional[FirewallRules] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rules' }})
    status: Optional[FirewallStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

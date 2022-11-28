from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class FirewallRulesInboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"

class FirewallRulesOutboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"


@dataclass_json
@dataclass
class FirewallRules:
    r"""FirewallRules
    The inbound and outbound access rules to apply to the Firewall.
    
    A Firewall may have up to 25 rules across its inbound and outbound rulesets.
    
    """
    
    inbound: Optional[List[FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound') }})
    inbound_policy: Optional[FirewallRulesInboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_policy') }})
    outbound: Optional[List[FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound') }})
    outbound_policy: Optional[FirewallRulesOutboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_policy') }})
    
class FirewallStatusEnum(str, Enum):
    ENABLED = "enabled"
    DISABLED = "disabled"
    DELETED = "deleted"


@dataclass_json
@dataclass
class Firewall:
    r"""Firewall
    A resource that controls incoming and outgoing network traffic to a Linode service. Only one Firewall can be attached to a Linode at any given time. [Create a Firewall Device](/docs/api/networking/#firewall-create) to assign a Firewall to a Linode service. Currently, Firewalls can only be assigned to Linode instances.
    
    """
    
    created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    rules: Optional[FirewallRules] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rules') }})
    status: Optional[FirewallStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    updated: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

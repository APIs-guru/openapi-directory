from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import firewallruleconfig
from . import firewallruleconfig

class RulesInboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"

class RulesOutboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"


@dataclass_json
@dataclass
class Rules:
    inbound: Optional[List[firewallruleconfig.FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound' }})
    inbound_policy: Optional[RulesInboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inbound_policy' }})
    outbound: Optional[List[firewallruleconfig.FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound' }})
    outbound_policy: Optional[RulesOutboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outbound_policy' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RulesInboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"

class RulesOutboundPolicyEnum(str, Enum):
    ACCEPT = "ACCEPT"
    DROP = "DROP"


@dataclass_json
@dataclass
class Rules:
    r"""Rules
    The inbound and outbound access rules to apply to the Firewall.
    
    A Firewall may have up to 25 rules across its inbound and outbound rulesets.
    
    """
    
    inbound: Optional[List[FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound') }})
    inbound_policy: Optional[RulesInboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inbound_policy') }})
    outbound: Optional[List[FirewallRuleConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound') }})
    outbound_policy: Optional[RulesOutboundPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outbound_policy') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ResponsePolicyRuleBehaviorEnum(str, Enum):
    BEHAVIOR_UNSPECIFIED = "behaviorUnspecified"
    BYPASS_RESPONSE_POLICY = "bypassResponsePolicy"


@dataclass_json
@dataclass
class ResponsePolicyRule:
    r"""ResponsePolicyRule
    A Response Policy Rule is a selector that applies its behavior to queries that match the selector. Selectors are DNS names, which may be wildcards or exact matches. Each DNS query subject to a Response Policy matches at most one ResponsePolicyRule, as identified by the dns_name field with the longest matching suffix.
    """
    
    behavior: Optional[ResponsePolicyRuleBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('behavior') }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsName') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    local_data: Optional[ResponsePolicyRuleLocalData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localData') }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ruleName') }})
    

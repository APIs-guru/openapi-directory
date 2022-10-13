from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import responsepolicyrulelocaldata

class ResponsePolicyRuleBehaviorEnum(str, Enum):
    BEHAVIOR_UNSPECIFIED = "behaviorUnspecified"
    BYPASS_RESPONSE_POLICY = "bypassResponsePolicy"


@dataclass_json
@dataclass
class ResponsePolicyRule:
    behavior: Optional[ResponsePolicyRuleBehaviorEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'behavior' }})
    dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsName' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    local_data: Optional[responsepolicyrulelocaldata.ResponsePolicyRuleLocalData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localData' }})
    rule_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ruleName' }})
    

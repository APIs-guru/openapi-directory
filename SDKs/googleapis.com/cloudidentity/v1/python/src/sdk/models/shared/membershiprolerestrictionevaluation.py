from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MembershipRoleRestrictionEvaluationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    COMPLIANT = "COMPLIANT"
    FORWARD_COMPLIANT = "FORWARD_COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    EVALUATING = "EVALUATING"


@dataclass_json
@dataclass
class MembershipRoleRestrictionEvaluation:
    state: Optional[MembershipRoleRestrictionEvaluationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

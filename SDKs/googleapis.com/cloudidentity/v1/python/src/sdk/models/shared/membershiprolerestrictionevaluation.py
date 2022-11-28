from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MembershipRoleRestrictionEvaluationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    COMPLIANT = "COMPLIANT"
    FORWARD_COMPLIANT = "FORWARD_COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    EVALUATING = "EVALUATING"


@dataclass_json
@dataclass
class MembershipRoleRestrictionEvaluation:
    r"""MembershipRoleRestrictionEvaluation
    The evaluated state of this restriction.
    """
    
    state: Optional[MembershipRoleRestrictionEvaluationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

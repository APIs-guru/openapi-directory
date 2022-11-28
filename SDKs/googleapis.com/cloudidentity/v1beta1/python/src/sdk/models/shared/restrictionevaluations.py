from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RestrictionEvaluations:
    r"""RestrictionEvaluations
    Evaluations of restrictions applied to parent group on this membership.
    """
    
    member_restriction_evaluation: Optional[MembershipRoleRestrictionEvaluation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberRestrictionEvaluation') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import membershiprolerestrictionevaluation


@dataclass_json
@dataclass
class RestrictionEvaluations:
    member_restriction_evaluation: Optional[membershiprolerestrictionevaluation.MembershipRoleRestrictionEvaluation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberRestrictionEvaluation' }})
    

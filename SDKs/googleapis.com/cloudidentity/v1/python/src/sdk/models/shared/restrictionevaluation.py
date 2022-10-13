from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RestrictionEvaluationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    EVALUATING = "EVALUATING"
    COMPLIANT = "COMPLIANT"
    FORWARD_COMPLIANT = "FORWARD_COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"


@dataclass_json
@dataclass
class RestrictionEvaluation:
    state: Optional[RestrictionEvaluationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

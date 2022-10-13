from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ConsentEvaluationEvaluationResultEnum(str, Enum):
    EVALUATION_RESULT_UNSPECIFIED = "EVALUATION_RESULT_UNSPECIFIED"
    NOT_APPLICABLE = "NOT_APPLICABLE"
    NO_MATCHING_POLICY = "NO_MATCHING_POLICY"
    NO_SATISFIED_POLICY = "NO_SATISFIED_POLICY"
    HAS_SATISFIED_POLICY = "HAS_SATISFIED_POLICY"


@dataclass_json
@dataclass
class ConsentEvaluation:
    evaluation_result: Optional[ConsentEvaluationEvaluationResultEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationResult' }})
    

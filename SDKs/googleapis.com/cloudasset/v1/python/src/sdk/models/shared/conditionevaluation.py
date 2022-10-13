from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ConditionEvaluationEvaluationValueEnum(str, Enum):
    EVALUATION_VALUE_UNSPECIFIED = "EVALUATION_VALUE_UNSPECIFIED"
    TRUE = "TRUE"
    FALSE = "FALSE"
    CONDITIONAL = "CONDITIONAL"


@dataclass_json
@dataclass
class ConditionEvaluation:
    evaluation_value: Optional[ConditionEvaluationEvaluationValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluationValue' }})
    

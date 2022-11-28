from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConditionEvaluationEvaluationValueEnum(str, Enum):
    EVALUATION_VALUE_UNSPECIFIED = "EVALUATION_VALUE_UNSPECIFIED"
    TRUE = "TRUE"
    FALSE = "FALSE"
    CONDITIONAL = "CONDITIONAL"


@dataclass_json
@dataclass
class ConditionEvaluation:
    r"""ConditionEvaluation
    The Condition evaluation.
    """
    
    evaluation_value: Optional[ConditionEvaluationEvaluationValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationValue') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ConsentEvaluationEvaluationResultEnum(str, Enum):
    EVALUATION_RESULT_UNSPECIFIED = "EVALUATION_RESULT_UNSPECIFIED"
    NOT_APPLICABLE = "NOT_APPLICABLE"
    NO_MATCHING_POLICY = "NO_MATCHING_POLICY"
    NO_SATISFIED_POLICY = "NO_SATISFIED_POLICY"
    HAS_SATISFIED_POLICY = "HAS_SATISFIED_POLICY"


@dataclass_json
@dataclass
class ConsentEvaluation:
    r"""ConsentEvaluation
    The detailed evaluation of a particular Consent.
    """
    
    evaluation_result: Optional[ConsentEvaluationEvaluationResultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('evaluationResult') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum(str, Enum):
    CORRECTNESS_LEVEL_UNSPECIFIED = "CORRECTNESS_LEVEL_UNSPECIFIED"
    NOT_CORRECT = "NOT_CORRECT"
    PARTIALLY_CORRECT = "PARTIALLY_CORRECT"
    FULLY_CORRECT = "FULLY_CORRECT"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1AnswerFeedback:
    r"""GoogleCloudContactcenterinsightsV1AnswerFeedback
    The feedback that the customer has about a certain answer in the conversation.
    """
    
    clicked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clicked') }})
    correctness_level: Optional[GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctnessLevel') }})
    displayed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayed') }})
    

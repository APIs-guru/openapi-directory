from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum(str, Enum):
    CORRECTNESS_LEVEL_UNSPECIFIED = "CORRECTNESS_LEVEL_UNSPECIFIED"
    NOT_CORRECT = "NOT_CORRECT"
    PARTIALLY_CORRECT = "PARTIALLY_CORRECT"
    FULLY_CORRECT = "FULLY_CORRECT"


@dataclass_json
@dataclass
class GoogleCloudContactcenterinsightsV1AnswerFeedback:
    clicked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clicked' }})
    correctness_level: Optional[GoogleCloudContactcenterinsightsV1AnswerFeedbackCorrectnessLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctnessLevel' }})
    displayed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayed' }})
    

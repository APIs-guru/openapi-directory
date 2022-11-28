from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum(str, Enum):
    CORRECTNESS_LEVEL_UNSPECIFIED = "CORRECTNESS_LEVEL_UNSPECIFIED"
    NOT_CORRECT = "NOT_CORRECT"
    PARTIALLY_CORRECT = "PARTIALLY_CORRECT"
    FULLY_CORRECT = "FULLY_CORRECT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AnswerFeedback:
    r"""GoogleCloudDialogflowV2beta1AnswerFeedback
    Represents feedback the customer has about the quality & correctness of a certain answer in a conversation.
    """
    
    agent_assistant_detail_feedback: Optional[GoogleCloudDialogflowV2beta1AgentAssistantFeedback] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentAssistantDetailFeedback') }})
    click_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clickTime') }})
    clicked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clicked') }})
    correctness_level: Optional[GoogleCloudDialogflowV2beta1AnswerFeedbackCorrectnessLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('correctnessLevel') }})
    display_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayTime') }})
    displayed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayed') }})
    

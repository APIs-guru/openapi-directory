from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2agentassistantfeedback

class GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum(str, Enum):
    CORRECTNESS_LEVEL_UNSPECIFIED = "CORRECTNESS_LEVEL_UNSPECIFIED"
    NOT_CORRECT = "NOT_CORRECT"
    PARTIALLY_CORRECT = "PARTIALLY_CORRECT"
    FULLY_CORRECT = "FULLY_CORRECT"


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AnswerFeedback:
    agent_assistant_detail_feedback: Optional[googleclouddialogflowv2agentassistantfeedback.GoogleCloudDialogflowV2AgentAssistantFeedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentAssistantDetailFeedback' }})
    click_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clickTime' }})
    clicked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clicked' }})
    correctness_level: Optional[GoogleCloudDialogflowV2AnswerFeedbackCorrectnessLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'correctnessLevel' }})
    display_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayTime' }})
    displayed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayed' }})
    

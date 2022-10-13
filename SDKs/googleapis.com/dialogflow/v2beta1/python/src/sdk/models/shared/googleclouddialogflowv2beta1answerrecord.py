from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1agentassistantrecord
from . import googleclouddialogflowv2beta1answerfeedback


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AnswerRecord:
    agent_assistant_record: Optional[googleclouddialogflowv2beta1agentassistantrecord.GoogleCloudDialogflowV2beta1AgentAssistantRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentAssistantRecord' }})
    answer_feedback: Optional[googleclouddialogflowv2beta1answerfeedback.GoogleCloudDialogflowV2beta1AnswerFeedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerFeedback' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

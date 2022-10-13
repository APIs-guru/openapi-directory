from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2agentassistantrecord
from . import googleclouddialogflowv2answerfeedback


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AnswerRecord:
    agent_assistant_record: Optional[googleclouddialogflowv2agentassistantrecord.GoogleCloudDialogflowV2AgentAssistantRecord] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentAssistantRecord' }})
    answer_feedback: Optional[googleclouddialogflowv2answerfeedback.GoogleCloudDialogflowV2AnswerFeedback] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answerFeedback' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

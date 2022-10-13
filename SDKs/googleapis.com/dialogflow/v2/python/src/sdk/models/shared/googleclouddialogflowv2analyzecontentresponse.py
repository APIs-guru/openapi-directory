from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2automatedagentreply
from . import googleclouddialogflowv2dtmfparameters
from . import googleclouddialogflowv2suggestionresult
from . import googleclouddialogflowv2suggestionresult
from . import googleclouddialogflowv2message
from . import googleclouddialogflowv2outputaudio


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AnalyzeContentResponse:
    automated_agent_reply: Optional[googleclouddialogflowv2automatedagentreply.GoogleCloudDialogflowV2AutomatedAgentReply] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatedAgentReply' }})
    dtmf_parameters: Optional[googleclouddialogflowv2dtmfparameters.GoogleCloudDialogflowV2DtmfParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dtmfParameters' }})
    end_user_suggestion_results: Optional[List[googleclouddialogflowv2suggestionresult.GoogleCloudDialogflowV2SuggestionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endUserSuggestionResults' }})
    human_agent_suggestion_results: Optional[List[googleclouddialogflowv2suggestionresult.GoogleCloudDialogflowV2SuggestionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanAgentSuggestionResults' }})
    message: Optional[googleclouddialogflowv2message.GoogleCloudDialogflowV2Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    reply_audio: Optional[googleclouddialogflowv2outputaudio.GoogleCloudDialogflowV2OutputAudio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyAudio' }})
    reply_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyText' }})
    

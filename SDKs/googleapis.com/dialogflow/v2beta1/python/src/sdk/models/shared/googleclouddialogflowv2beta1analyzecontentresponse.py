from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1automatedagentreply
from . import googleclouddialogflowv2beta1dtmfparameters
from . import googleclouddialogflowv2beta1suggestionresult
from . import googleclouddialogflowv2beta1suggestionresult
from . import googleclouddialogflowv2beta1message
from . import googleclouddialogflowv2beta1outputaudio


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AnalyzeContentResponse:
    automated_agent_reply: Optional[googleclouddialogflowv2beta1automatedagentreply.GoogleCloudDialogflowV2beta1AutomatedAgentReply] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automatedAgentReply' }})
    dtmf_parameters: Optional[googleclouddialogflowv2beta1dtmfparameters.GoogleCloudDialogflowV2beta1DtmfParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dtmfParameters' }})
    end_user_suggestion_results: Optional[List[googleclouddialogflowv2beta1suggestionresult.GoogleCloudDialogflowV2beta1SuggestionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endUserSuggestionResults' }})
    human_agent_suggestion_results: Optional[List[googleclouddialogflowv2beta1suggestionresult.GoogleCloudDialogflowV2beta1SuggestionResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'humanAgentSuggestionResults' }})
    message: Optional[googleclouddialogflowv2beta1message.GoogleCloudDialogflowV2beta1Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    reply_audio: Optional[googleclouddialogflowv2beta1outputaudio.GoogleCloudDialogflowV2beta1OutputAudio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyAudio' }})
    reply_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyText' }})
    

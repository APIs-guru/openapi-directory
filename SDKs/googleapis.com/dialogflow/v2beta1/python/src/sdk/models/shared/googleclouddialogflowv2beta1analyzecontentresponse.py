from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AnalyzeContentResponse:
    r"""GoogleCloudDialogflowV2beta1AnalyzeContentResponse
    The response message for Participants.AnalyzeContent.
    """
    
    automated_agent_reply: Optional[GoogleCloudDialogflowV2beta1AutomatedAgentReply] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automatedAgentReply') }})
    dtmf_parameters: Optional[GoogleCloudDialogflowV2beta1DtmfParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dtmfParameters') }})
    end_user_suggestion_results: Optional[List[GoogleCloudDialogflowV2beta1SuggestionResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endUserSuggestionResults') }})
    human_agent_suggestion_results: Optional[List[GoogleCloudDialogflowV2beta1SuggestionResult]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humanAgentSuggestionResults') }})
    message: Optional[GoogleCloudDialogflowV2beta1Message] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    reply_audio: Optional[GoogleCloudDialogflowV2beta1OutputAudio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyAudio') }})
    reply_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyText') }})
    

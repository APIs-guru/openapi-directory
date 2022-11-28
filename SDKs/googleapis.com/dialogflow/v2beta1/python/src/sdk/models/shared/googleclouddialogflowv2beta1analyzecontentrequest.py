from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AnalyzeContentRequest:
    r"""GoogleCloudDialogflowV2beta1AnalyzeContentRequest
    The request message for Participants.AnalyzeContent.
    """
    
    assist_query_params: Optional[GoogleCloudDialogflowV2beta1AssistQueryParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assistQueryParams') }})
    audio_input: Optional[GoogleCloudDialogflowV2beta1AudioInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioInput') }})
    cx_current_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cxCurrentPage') }})
    cx_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cxParameters') }})
    event_input: Optional[GoogleCloudDialogflowV2beta1EventInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventInput') }})
    message_send_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageSendTime') }})
    query_params: Optional[GoogleCloudDialogflowV2beta1QueryParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParams') }})
    reply_audio_config: Optional[GoogleCloudDialogflowV2beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyAudioConfig') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    text_input: Optional[GoogleCloudDialogflowV2beta1TextInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textInput') }})
    

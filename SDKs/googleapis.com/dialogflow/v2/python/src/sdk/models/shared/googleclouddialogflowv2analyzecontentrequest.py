from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AnalyzeContentRequest:
    r"""GoogleCloudDialogflowV2AnalyzeContentRequest
    The request message for Participants.AnalyzeContent.
    """
    
    assist_query_params: Optional[GoogleCloudDialogflowV2AssistQueryParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assistQueryParams') }})
    cx_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cxParameters') }})
    event_input: Optional[GoogleCloudDialogflowV2EventInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventInput') }})
    query_params: Optional[GoogleCloudDialogflowV2QueryParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParams') }})
    reply_audio_config: Optional[GoogleCloudDialogflowV2OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replyAudioConfig') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    text_input: Optional[GoogleCloudDialogflowV2TextInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textInput') }})
    

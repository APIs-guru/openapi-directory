from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1assistqueryparameters
from . import googleclouddialogflowv2beta1audioinput
from . import googleclouddialogflowv2beta1eventinput
from . import googleclouddialogflowv2beta1queryparameters
from . import googleclouddialogflowv2beta1outputaudioconfig
from . import googleclouddialogflowv2beta1textinput


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1AnalyzeContentRequest:
    assist_query_params: Optional[googleclouddialogflowv2beta1assistqueryparameters.GoogleCloudDialogflowV2beta1AssistQueryParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assistQueryParams' }})
    audio_input: Optional[googleclouddialogflowv2beta1audioinput.GoogleCloudDialogflowV2beta1AudioInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioInput' }})
    cx_current_page: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cxCurrentPage' }})
    cx_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cxParameters' }})
    event_input: Optional[googleclouddialogflowv2beta1eventinput.GoogleCloudDialogflowV2beta1EventInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventInput' }})
    message_send_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageSendTime' }})
    query_params: Optional[googleclouddialogflowv2beta1queryparameters.GoogleCloudDialogflowV2beta1QueryParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParams' }})
    reply_audio_config: Optional[googleclouddialogflowv2beta1outputaudioconfig.GoogleCloudDialogflowV2beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyAudioConfig' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    text_input: Optional[googleclouddialogflowv2beta1textinput.GoogleCloudDialogflowV2beta1TextInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textInput' }})
    

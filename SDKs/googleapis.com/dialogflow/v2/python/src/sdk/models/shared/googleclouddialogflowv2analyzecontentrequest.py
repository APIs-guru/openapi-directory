from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2assistqueryparameters
from . import googleclouddialogflowv2eventinput
from . import googleclouddialogflowv2queryparameters
from . import googleclouddialogflowv2outputaudioconfig
from . import googleclouddialogflowv2textinput


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2AnalyzeContentRequest:
    assist_query_params: Optional[googleclouddialogflowv2assistqueryparameters.GoogleCloudDialogflowV2AssistQueryParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assistQueryParams' }})
    cx_parameters: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cxParameters' }})
    event_input: Optional[googleclouddialogflowv2eventinput.GoogleCloudDialogflowV2EventInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventInput' }})
    query_params: Optional[googleclouddialogflowv2queryparameters.GoogleCloudDialogflowV2QueryParameters] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryParams' }})
    reply_audio_config: Optional[googleclouddialogflowv2outputaudioconfig.GoogleCloudDialogflowV2OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'replyAudioConfig' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    text_input: Optional[googleclouddialogflowv2textinput.GoogleCloudDialogflowV2TextInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textInput' }})
    

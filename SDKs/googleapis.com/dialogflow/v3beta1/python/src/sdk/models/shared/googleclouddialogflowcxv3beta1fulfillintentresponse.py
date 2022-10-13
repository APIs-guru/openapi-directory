from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1outputaudioconfig
from . import googleclouddialogflowcxv3beta1queryresult


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillIntentResponse:
    output_audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudio' }})
    output_audio_config: Optional[googleclouddialogflowcxv3beta1outputaudioconfig.GoogleCloudDialogflowCxV3beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfig' }})
    query_result: Optional[googleclouddialogflowcxv3beta1queryresult.GoogleCloudDialogflowCxV3beta1QueryResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryResult' }})
    response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseId' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3outputaudioconfig
from . import googleclouddialogflowcxv3queryresult


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FulfillIntentResponse:
    output_audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudio' }})
    output_audio_config: Optional[googleclouddialogflowcxv3outputaudioconfig.GoogleCloudDialogflowCxV3OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfig' }})
    query_result: Optional[googleclouddialogflowcxv3queryresult.GoogleCloudDialogflowCxV3QueryResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryResult' }})
    response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseId' }})
    

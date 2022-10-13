from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2outputaudioconfig
from . import googleclouddialogflowv2queryresult
from . import googlerpcstatus


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2DetectIntentResponse:
    output_audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudio' }})
    output_audio_config: Optional[googleclouddialogflowv2outputaudioconfig.GoogleCloudDialogflowV2OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfig' }})
    query_result: Optional[googleclouddialogflowv2queryresult.GoogleCloudDialogflowV2QueryResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryResult' }})
    response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseId' }})
    webhook_status: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookStatus' }})
    

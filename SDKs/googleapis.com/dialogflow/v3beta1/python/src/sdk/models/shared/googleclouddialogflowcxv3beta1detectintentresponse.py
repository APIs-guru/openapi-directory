from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowcxv3beta1outputaudioconfig
from . import googleclouddialogflowcxv3beta1queryresult

class GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum(str, Enum):
    RESPONSE_TYPE_UNSPECIFIED = "RESPONSE_TYPE_UNSPECIFIED"
    PARTIAL = "PARTIAL"
    FINAL = "FINAL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1DetectIntentResponse:
    allow_cancellation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowCancellation' }})
    output_audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudio' }})
    output_audio_config: Optional[googleclouddialogflowcxv3beta1outputaudioconfig.GoogleCloudDialogflowCxV3beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfig' }})
    query_result: Optional[googleclouddialogflowcxv3beta1queryresult.GoogleCloudDialogflowCxV3beta1QueryResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryResult' }})
    response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseId' }})
    response_type: Optional[GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseType' }})
    

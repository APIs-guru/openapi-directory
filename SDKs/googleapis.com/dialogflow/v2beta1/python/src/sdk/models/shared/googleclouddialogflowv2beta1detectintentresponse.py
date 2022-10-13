from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleclouddialogflowv2beta1queryresult
from . import googleclouddialogflowv2beta1outputaudioconfig
from . import googleclouddialogflowv2beta1queryresult
from . import googlerpcstatus


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1DetectIntentResponse:
    alternative_query_results: Optional[List[googleclouddialogflowv2beta1queryresult.GoogleCloudDialogflowV2beta1QueryResult]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternativeQueryResults' }})
    output_audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudio' }})
    output_audio_config: Optional[googleclouddialogflowv2beta1outputaudioconfig.GoogleCloudDialogflowV2beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputAudioConfig' }})
    query_result: Optional[googleclouddialogflowv2beta1queryresult.GoogleCloudDialogflowV2beta1QueryResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queryResult' }})
    response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseId' }})
    webhook_status: Optional[googlerpcstatus.GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhookStatus' }})
    

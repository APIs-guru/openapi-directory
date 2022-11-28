from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2DetectIntentResponse:
    r"""GoogleCloudDialogflowV2DetectIntentResponse
    The message returned from the DetectIntent method.
    """
    
    output_audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudio') }})
    output_audio_config: Optional[GoogleCloudDialogflowV2OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioConfig') }})
    query_result: Optional[GoogleCloudDialogflowV2QueryResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryResult') }})
    response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseId') }})
    webhook_status: Optional[GoogleRPCStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webhookStatus') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum(str, Enum):
    RESPONSE_TYPE_UNSPECIFIED = "RESPONSE_TYPE_UNSPECIFIED"
    PARTIAL = "PARTIAL"
    FINAL = "FINAL"


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1DetectIntentResponse:
    r"""GoogleCloudDialogflowCxV3beta1DetectIntentResponse
    The message returned from the DetectIntent method.
    """
    
    allow_cancellation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowCancellation') }})
    output_audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudio') }})
    output_audio_config: Optional[GoogleCloudDialogflowCxV3beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioConfig') }})
    query_result: Optional[GoogleCloudDialogflowCxV3beta1QueryResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryResult') }})
    response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseId') }})
    response_type: Optional[GoogleCloudDialogflowCxV3beta1DetectIntentResponseResponseTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseType') }})
    

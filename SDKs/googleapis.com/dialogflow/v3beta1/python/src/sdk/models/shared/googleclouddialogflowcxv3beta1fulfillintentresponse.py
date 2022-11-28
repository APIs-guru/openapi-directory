from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillIntentResponse:
    r"""GoogleCloudDialogflowCxV3beta1FulfillIntentResponse
    Response of FulfillIntent
    """
    
    output_audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudio') }})
    output_audio_config: Optional[GoogleCloudDialogflowCxV3beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioConfig') }})
    query_result: Optional[GoogleCloudDialogflowCxV3beta1QueryResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryResult') }})
    response_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseId') }})
    

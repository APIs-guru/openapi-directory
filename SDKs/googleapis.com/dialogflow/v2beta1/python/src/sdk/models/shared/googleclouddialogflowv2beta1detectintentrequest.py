from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1DetectIntentRequest:
    r"""GoogleCloudDialogflowV2beta1DetectIntentRequest
    The request to detect user's intent.
    """
    
    input_audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inputAudio') }})
    output_audio_config: Optional[GoogleCloudDialogflowV2beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioConfig') }})
    output_audio_config_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioConfigMask') }})
    query_input: Optional[GoogleCloudDialogflowV2beta1QueryInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryInput') }})
    query_params: Optional[GoogleCloudDialogflowV2beta1QueryParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParams') }})
    

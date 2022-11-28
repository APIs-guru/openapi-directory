from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1DetectIntentRequest:
    r"""GoogleCloudDialogflowCxV3beta1DetectIntentRequest
    The request to detect user's intent.
    """
    
    output_audio_config: Optional[GoogleCloudDialogflowCxV3beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioConfig') }})
    query_input: Optional[GoogleCloudDialogflowCxV3beta1QueryInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryInput') }})
    query_params: Optional[GoogleCloudDialogflowCxV3beta1QueryParameters] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queryParams') }})
    

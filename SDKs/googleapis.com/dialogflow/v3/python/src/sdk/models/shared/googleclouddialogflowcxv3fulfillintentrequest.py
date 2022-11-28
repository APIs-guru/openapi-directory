from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3FulfillIntentRequest:
    r"""GoogleCloudDialogflowCxV3FulfillIntentRequest
    Request of FulfillIntent
    """
    
    match: Optional[GoogleCloudDialogflowCxV3Match] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    match_intent_request: Optional[GoogleCloudDialogflowCxV3MatchIntentRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchIntentRequest') }})
    output_audio_config: Optional[GoogleCloudDialogflowCxV3OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioConfig') }})
    

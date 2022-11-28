from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1FulfillIntentRequest:
    r"""GoogleCloudDialogflowCxV3beta1FulfillIntentRequest
    Request of FulfillIntent
    """
    
    match: Optional[GoogleCloudDialogflowCxV3beta1Match] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('match') }})
    match_intent_request: Optional[GoogleCloudDialogflowCxV3beta1MatchIntentRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchIntentRequest') }})
    output_audio_config: Optional[GoogleCloudDialogflowCxV3beta1OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputAudioConfig') }})
    

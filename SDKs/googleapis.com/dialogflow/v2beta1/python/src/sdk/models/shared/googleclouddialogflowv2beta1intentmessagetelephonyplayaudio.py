from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio:
    r"""GoogleCloudDialogflowV2beta1IntentMessageTelephonyPlayAudio
    Plays audio from a file in Telephony Gateway.
    """
    
    audio_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioUri') }})
    

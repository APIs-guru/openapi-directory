from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech:
    r"""GoogleCloudDialogflowV2beta1IntentMessageTelephonySynthesizeSpeech
    Synthesizes speech and plays back the synthesized audio to the caller in Telephony Gateway. Telephony Gateway takes the synthesizer settings from `DetectIntentResponse.output_audio_config` which can either be set at request-level or can come from the agent-level synthesizer config.
    """
    
    ssml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssml') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

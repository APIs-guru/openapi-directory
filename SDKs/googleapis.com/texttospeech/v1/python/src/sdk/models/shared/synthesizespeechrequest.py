from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SynthesizeSpeechRequest:
    r"""SynthesizeSpeechRequest
    The top-level message sent by the client for the `SynthesizeSpeech` method.
    """
    
    audio_config: Optional[AudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioConfig') }})
    input: Optional[SynthesisInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    voice: Optional[VoiceSelectionParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    

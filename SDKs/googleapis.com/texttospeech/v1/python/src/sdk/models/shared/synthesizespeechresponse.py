from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SynthesizeSpeechResponse:
    r"""SynthesizeSpeechResponse
    The message returned to the client by the `SynthesizeSpeech` method.
    """
    
    audio_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioContent') }})
    

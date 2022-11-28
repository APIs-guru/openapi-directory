from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SynthesizeSpeechResponse:
    r"""SynthesizeSpeechResponse
    The message returned to the client by the `SynthesizeSpeech` method.
    """
    
    audio_config: Optional[AudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioConfig') }})
    audio_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioContent') }})
    timepoints: Optional[List[Timepoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timepoints') }})
    

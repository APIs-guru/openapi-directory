from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LongRunningRecognizeRequestInput:
    r"""LongRunningRecognizeRequestInput
    The top-level message sent by the client for the `LongRunningRecognize` method.
    """
    
    audio: Optional[RecognitionAudio] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    config: Optional[RecognitionConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    output_config: Optional[TranscriptOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outputConfig') }})
    

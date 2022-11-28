from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SynthesizeSpeechRequestEnableTimePointingEnum(str, Enum):
    TIMEPOINT_TYPE_UNSPECIFIED = "TIMEPOINT_TYPE_UNSPECIFIED"
    SSML_MARK = "SSML_MARK"


@dataclass_json
@dataclass
class SynthesizeSpeechRequest:
    r"""SynthesizeSpeechRequest
    The top-level message sent by the client for the `SynthesizeSpeech` method.
    """
    
    audio_config: Optional[AudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioConfig') }})
    enable_time_pointing: Optional[List[SynthesizeSpeechRequestEnableTimePointingEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableTimePointing') }})
    input: Optional[SynthesisInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('input') }})
    voice: Optional[VoiceSelectionParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    

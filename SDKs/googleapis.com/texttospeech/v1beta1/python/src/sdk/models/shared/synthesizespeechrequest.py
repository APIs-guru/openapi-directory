from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import audioconfig
from . import synthesisinput
from . import voiceselectionparams

class SynthesizeSpeechRequestEnableTimePointingEnum(str, Enum):
    TIMEPOINT_TYPE_UNSPECIFIED = "TIMEPOINT_TYPE_UNSPECIFIED"
    SSML_MARK = "SSML_MARK"


@dataclass_json
@dataclass
class SynthesizeSpeechRequest:
    audio_config: Optional[audioconfig.AudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioConfig' }})
    enable_time_pointing: Optional[List[SynthesizeSpeechRequestEnableTimePointingEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableTimePointing' }})
    input: Optional[synthesisinput.SynthesisInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    voice: Optional[voiceselectionparams.VoiceSelectionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    

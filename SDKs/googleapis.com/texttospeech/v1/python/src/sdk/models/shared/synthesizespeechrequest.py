from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import audioconfig
from . import synthesisinput
from . import voiceselectionparams


@dataclass_json
@dataclass
class SynthesizeSpeechRequest:
    audio_config: Optional[audioconfig.AudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioConfig' }})
    input: Optional[synthesisinput.SynthesisInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'input' }})
    voice: Optional[voiceselectionparams.VoiceSelectionParams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voice' }})
    

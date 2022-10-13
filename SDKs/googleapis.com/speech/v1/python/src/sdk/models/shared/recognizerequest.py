from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import recognitionaudio
from . import recognitionconfig


@dataclass_json
@dataclass
class RecognizeRequest:
    audio: Optional[recognitionaudio.RecognitionAudio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    config: Optional[recognitionconfig.RecognitionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    

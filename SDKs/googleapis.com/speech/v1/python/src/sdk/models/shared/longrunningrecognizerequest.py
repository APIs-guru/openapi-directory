from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import recognitionaudio
from . import recognitionconfig
from . import transcriptoutputconfig


@dataclass_json
@dataclass
class LongRunningRecognizeRequest:
    audio: Optional[recognitionaudio.RecognitionAudio] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audio' }})
    config: Optional[recognitionconfig.RecognitionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    output_config: Optional[transcriptoutputconfig.TranscriptOutputConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outputConfig' }})
    

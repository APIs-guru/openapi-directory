from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import audioconfig
from . import timepoint


@dataclass_json
@dataclass
class SynthesizeSpeechResponse:
    audio_config: Optional[audioconfig.AudioConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioConfig' }})
    audio_content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'audioContent' }})
    timepoints: Optional[List[timepoint.Timepoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timepoints' }})
    

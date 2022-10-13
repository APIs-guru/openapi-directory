from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SpeakerDiarizationConfig:
    enable_speaker_diarization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableSpeakerDiarization' }})
    max_speaker_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSpeakerCount' }})
    min_speaker_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minSpeakerCount' }})
    speaker_tag: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'speakerTag' }})
    

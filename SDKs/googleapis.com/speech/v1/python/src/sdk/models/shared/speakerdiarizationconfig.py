from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SpeakerDiarizationConfigInput:
    r"""SpeakerDiarizationConfigInput
    Config to enable speaker diarization.
    """
    
    enable_speaker_diarization: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableSpeakerDiarization') }})
    max_speaker_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSpeakerCount') }})
    min_speaker_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minSpeakerCount') }})
    

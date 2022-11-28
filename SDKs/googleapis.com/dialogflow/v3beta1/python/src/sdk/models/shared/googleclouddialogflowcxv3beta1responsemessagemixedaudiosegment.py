from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment:
    r"""GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegment
    Represents one segment of audio.
    """
    
    allow_playback_interruption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPlaybackInterruption') }})
    audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentInput:
    r"""GoogleCloudDialogflowCxV3beta1ResponseMessageMixedAudioSegmentInput
    Represents one segment of audio.
    """
    
    audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

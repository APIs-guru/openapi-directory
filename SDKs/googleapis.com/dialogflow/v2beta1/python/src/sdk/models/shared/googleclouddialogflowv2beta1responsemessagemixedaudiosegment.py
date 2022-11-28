from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment:
    r"""GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment
    Represents one segment of audio.
    """
    
    allow_playback_interruption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPlaybackInterruption') }})
    audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri') }})
    

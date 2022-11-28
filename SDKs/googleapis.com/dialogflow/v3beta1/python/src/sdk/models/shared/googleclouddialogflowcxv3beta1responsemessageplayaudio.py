from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput:
    r"""GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudioInput
    Specifies an audio clip to be played by the client as part of the response.
    """
    
    audio_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioUri') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio:
    r"""GoogleCloudDialogflowCxV3beta1ResponseMessagePlayAudio
    Specifies an audio clip to be played by the client as part of the response.
    """
    
    allow_playback_interruption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPlaybackInterruption') }})
    audio_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioUri') }})
    

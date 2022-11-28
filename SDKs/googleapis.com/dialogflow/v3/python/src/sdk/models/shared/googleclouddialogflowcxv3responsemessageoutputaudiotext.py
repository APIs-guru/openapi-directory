from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText:
    r"""GoogleCloudDialogflowCxV3ResponseMessageOutputAudioText
    A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
    """
    
    allow_playback_interruption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPlaybackInterruption') }})
    ssml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssml') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput:
    r"""GoogleCloudDialogflowCxV3ResponseMessageOutputAudioTextInput
    A text or ssml response that is preferentially used for TTS output audio synthesis, as described in the comment on the ResponseMessage message.
    """
    
    ssml: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssml') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

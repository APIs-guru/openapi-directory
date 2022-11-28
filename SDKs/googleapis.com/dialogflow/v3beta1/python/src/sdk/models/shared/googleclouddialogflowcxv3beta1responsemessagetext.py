from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessageText:
    r"""GoogleCloudDialogflowCxV3beta1ResponseMessageText
    The text response message.
    """
    
    allow_playback_interruption: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowPlaybackInterruption') }})
    text: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput:
    r"""GoogleCloudDialogflowCxV3beta1ResponseMessageTextInput
    The text response message.
    """
    
    text: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

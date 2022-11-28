from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2OutputAudio:
    r"""GoogleCloudDialogflowV2OutputAudio
    Represents the natural language speech audio to be played to the end user.
    """
    
    audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    config: Optional[GoogleCloudDialogflowV2OutputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    

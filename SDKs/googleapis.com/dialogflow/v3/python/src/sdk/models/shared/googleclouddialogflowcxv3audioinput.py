from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowCxV3AudioInput:
    r"""GoogleCloudDialogflowCxV3AudioInput
    Represents the natural speech audio to be processed.
    """
    
    audio: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audio') }})
    config: Optional[GoogleCloudDialogflowCxV3InputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('config') }})
    

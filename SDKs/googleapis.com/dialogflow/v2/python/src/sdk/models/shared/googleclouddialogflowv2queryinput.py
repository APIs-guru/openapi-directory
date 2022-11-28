from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2QueryInput:
    r"""GoogleCloudDialogflowV2QueryInput
    Represents the query input. It can contain either: 1. An audio config which instructs the speech recognizer how to process the speech audio. 2. A conversational query in the form of text,. 3. An event that specifies which intent to trigger.
    """
    
    audio_config: Optional[GoogleCloudDialogflowV2InputAudioConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audioConfig') }})
    event: Optional[GoogleCloudDialogflowV2EventInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    text: Optional[GoogleCloudDialogflowV2TextInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    

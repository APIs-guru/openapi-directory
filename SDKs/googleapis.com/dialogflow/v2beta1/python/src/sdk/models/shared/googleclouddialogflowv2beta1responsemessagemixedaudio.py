from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio:
    r"""GoogleCloudDialogflowV2beta1ResponseMessageMixedAudio
    Represents an audio message that is composed of both segments synthesized from the Dialogflow agent prompts and ones hosted externally at the specified URIs.
    """
    
    segments: Optional[List[GoogleCloudDialogflowV2beta1ResponseMessageMixedAudioSegment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segments') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudDialogflowV2SynthesizeSpeechConfig:
    r"""GoogleCloudDialogflowV2SynthesizeSpeechConfig
    Configuration of how speech should be synthesized.
    """
    
    effects_profile_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectsProfileId') }})
    pitch: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pitch') }})
    speaking_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('speakingRate') }})
    voice: Optional[GoogleCloudDialogflowV2VoiceSelectionParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('voice') }})
    volume_gain_db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volumeGainDb') }})
    

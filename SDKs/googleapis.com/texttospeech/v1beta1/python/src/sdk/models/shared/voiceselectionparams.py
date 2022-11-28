from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class VoiceSelectionParamsSsmlGenderEnum(str, Enum):
    SSML_VOICE_GENDER_UNSPECIFIED = "SSML_VOICE_GENDER_UNSPECIFIED"
    MALE = "MALE"
    FEMALE = "FEMALE"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclass
class VoiceSelectionParams:
    r"""VoiceSelectionParams
    Description of which voice to use for a synthesis request.
    """
    
    custom_voice: Optional[CustomVoiceParams] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customVoice') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    ssml_gender: Optional[VoiceSelectionParamsSsmlGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmlGender') }})
    

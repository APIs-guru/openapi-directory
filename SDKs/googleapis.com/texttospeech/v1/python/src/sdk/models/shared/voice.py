from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class VoiceSsmlGenderEnum(str, Enum):
    SSML_VOICE_GENDER_UNSPECIFIED = "SSML_VOICE_GENDER_UNSPECIFIED"
    MALE = "MALE"
    FEMALE = "FEMALE"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclass
class Voice:
    r"""Voice
    Description of a voice supported by the TTS service.
    """
    
    language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCodes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    natural_sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('naturalSampleRateHertz') }})
    ssml_gender: Optional[VoiceSsmlGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ssmlGender') }})
    

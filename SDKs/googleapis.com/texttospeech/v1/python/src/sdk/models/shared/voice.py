from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class VoiceSsmlGenderEnum(str, Enum):
    SSML_VOICE_GENDER_UNSPECIFIED = "SSML_VOICE_GENDER_UNSPECIFIED"
    MALE = "MALE"
    FEMALE = "FEMALE"
    NEUTRAL = "NEUTRAL"


@dataclass_json
@dataclass
class Voice:
    language_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCodes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    natural_sample_rate_hertz: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'naturalSampleRateHertz' }})
    ssml_gender: Optional[VoiceSsmlGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssmlGender' }})
    

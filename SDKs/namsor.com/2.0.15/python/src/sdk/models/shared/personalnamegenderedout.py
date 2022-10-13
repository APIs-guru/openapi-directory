from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PersonalNameGenderedOutLikelyGenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class PersonalNameGenderedOut:
    gender_scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genderScale' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    likely_gender: Optional[PersonalNameGenderedOutLikelyGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likelyGender' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    probability_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probabilityCalibrated' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    

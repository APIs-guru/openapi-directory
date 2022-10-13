from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FirstLastNameGenderedOutLikelyGenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class FirstLastNameGenderedOut:
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    gender_scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'genderScale' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    likely_gender: Optional[FirstLastNameGenderedOutLikelyGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'likelyGender' }})
    probability_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'probabilityCalibrated' }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'score' }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'script' }})
    

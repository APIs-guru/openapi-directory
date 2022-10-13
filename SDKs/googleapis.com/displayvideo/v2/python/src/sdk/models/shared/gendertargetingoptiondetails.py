from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GenderTargetingOptionDetailsGenderEnum(str, Enum):
    GENDER_UNSPECIFIED = "GENDER_UNSPECIFIED"
    GENDER_MALE = "GENDER_MALE"
    GENDER_FEMALE = "GENDER_FEMALE"
    GENDER_UNKNOWN = "GENDER_UNKNOWN"


@dataclass_json
@dataclass
class GenderTargetingOptionDetails:
    gender: Optional[GenderTargetingOptionDetailsGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    

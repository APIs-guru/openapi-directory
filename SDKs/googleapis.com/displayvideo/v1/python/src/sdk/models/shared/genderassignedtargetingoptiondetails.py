from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GenderAssignedTargetingOptionDetailsGenderEnum(str, Enum):
    GENDER_UNSPECIFIED = "GENDER_UNSPECIFIED"
    GENDER_MALE = "GENDER_MALE"
    GENDER_FEMALE = "GENDER_FEMALE"
    GENDER_UNKNOWN = "GENDER_UNKNOWN"


@dataclass_json
@dataclass
class GenderAssignedTargetingOptionDetails:
    gender: Optional[GenderAssignedTargetingOptionDetailsGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptionId' }})
    

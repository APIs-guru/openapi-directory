from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GenderAssignedTargetingOptionDetailsGenderEnum(str, Enum):
    GENDER_UNSPECIFIED = "GENDER_UNSPECIFIED"
    GENDER_MALE = "GENDER_MALE"
    GENDER_FEMALE = "GENDER_FEMALE"
    GENDER_UNKNOWN = "GENDER_UNKNOWN"


@dataclass_json
@dataclass
class GenderAssignedTargetingOptionDetails:
    r"""GenderAssignedTargetingOptionDetails
    Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
    """
    
    gender: Optional[GenderAssignedTargetingOptionDetailsGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GenderTargetingOptionDetailsGenderEnum(str, Enum):
    GENDER_UNSPECIFIED = "GENDER_UNSPECIFIED"
    GENDER_MALE = "GENDER_MALE"
    GENDER_FEMALE = "GENDER_FEMALE"
    GENDER_UNKNOWN = "GENDER_UNKNOWN"


@dataclass_json
@dataclass
class GenderTargetingOptionDetails:
    r"""GenderTargetingOptionDetails
    Represents a targetable gender. This will be populated in the gender_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.
    """
    
    gender: Optional[GenderTargetingOptionDetailsGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    

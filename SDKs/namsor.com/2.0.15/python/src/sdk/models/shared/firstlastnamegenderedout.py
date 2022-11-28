from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FirstLastNameGenderedOutLikelyGenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class FirstLastNameGenderedOut:
    r"""FirstLastNameGenderedOut
    Represents the output of inferring the LIKELY gender from a personal name.
    """
    
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    gender_scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genderScale') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    likely_gender: Optional[FirstLastNameGenderedOutLikelyGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likelyGender') }})
    probability_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probabilityCalibrated') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    

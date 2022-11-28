from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PersonalNameGenderedOutLikelyGenderEnum(str, Enum):
    MALE = "male"
    FEMALE = "female"
    UNKNOWN = "unknown"


@dataclass_json
@dataclass
class PersonalNameGenderedOut:
    r"""PersonalNameGenderedOut
    Classified genderized names
    """
    
    gender_scale: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('genderScale') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    likely_gender: Optional[PersonalNameGenderedOutLikelyGenderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('likelyGender') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    probability_calibrated: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('probabilityCalibrated') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    script: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('script') }})
    

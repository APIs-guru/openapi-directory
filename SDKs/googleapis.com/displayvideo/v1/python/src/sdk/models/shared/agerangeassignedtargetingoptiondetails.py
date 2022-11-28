from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum(str, Enum):
    AGE_RANGE_UNSPECIFIED = "AGE_RANGE_UNSPECIFIED"
    AGE_RANGE_18_24 = "AGE_RANGE_18_24"
    AGE_RANGE_25_34 = "AGE_RANGE_25_34"
    AGE_RANGE_35_44 = "AGE_RANGE_35_44"
    AGE_RANGE_45_54 = "AGE_RANGE_45_54"
    AGE_RANGE_55_64 = "AGE_RANGE_55_64"
    AGE_RANGE_65_PLUS = "AGE_RANGE_65_PLUS"
    AGE_RANGE_UNKNOWN = "AGE_RANGE_UNKNOWN"


@dataclass_json
@dataclass
class AgeRangeAssignedTargetingOptionDetails:
    r"""AgeRangeAssignedTargetingOptionDetails
    Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`.
    """
    
    age_range: Optional[AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ageRange') }})
    targeting_option_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetingOptionId') }})
    

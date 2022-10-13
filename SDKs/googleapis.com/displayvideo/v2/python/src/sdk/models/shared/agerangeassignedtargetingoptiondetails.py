from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum(str, Enum):
    AGE_RANGE_UNSPECIFIED = "AGE_RANGE_UNSPECIFIED"
    AGE_RANGE_18_24 = "AGE_RANGE_18_24"
    AGE_RANGE_25_34 = "AGE_RANGE_25_34"
    AGE_RANGE_35_44 = "AGE_RANGE_35_44"
    AGE_RANGE_45_54 = "AGE_RANGE_45_54"
    AGE_RANGE_55_64 = "AGE_RANGE_55_64"
    AGE_RANGE_65_PLUS = "AGE_RANGE_65_PLUS"
    AGE_RANGE_UNKNOWN = "AGE_RANGE_UNKNOWN"
    AGE_RANGE_18_20 = "AGE_RANGE_18_20"
    AGE_RANGE_21_24 = "AGE_RANGE_21_24"
    AGE_RANGE_25_29 = "AGE_RANGE_25_29"
    AGE_RANGE_30_34 = "AGE_RANGE_30_34"
    AGE_RANGE_35_39 = "AGE_RANGE_35_39"
    AGE_RANGE_40_44 = "AGE_RANGE_40_44"
    AGE_RANGE_45_49 = "AGE_RANGE_45_49"
    AGE_RANGE_50_54 = "AGE_RANGE_50_54"
    AGE_RANGE_55_59 = "AGE_RANGE_55_59"
    AGE_RANGE_60_64 = "AGE_RANGE_60_64"


@dataclass_json
@dataclass
class AgeRangeAssignedTargetingOptionDetails:
    age_range: Optional[AgeRangeAssignedTargetingOptionDetailsAgeRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ageRange' }})
    

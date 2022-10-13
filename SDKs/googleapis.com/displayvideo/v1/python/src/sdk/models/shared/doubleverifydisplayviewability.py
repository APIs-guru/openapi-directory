from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DoubleVerifyDisplayViewabilityIabEnum(str, Enum):
    IAB_VIEWED_RATE_UNSPECIFIED = "IAB_VIEWED_RATE_UNSPECIFIED"
    IAB_VIEWED_RATE_80_PERCENT_HIGHER = "IAB_VIEWED_RATE_80_PERCENT_HIGHER"
    IAB_VIEWED_RATE_75_PERCENT_HIGHER = "IAB_VIEWED_RATE_75_PERCENT_HIGHER"
    IAB_VIEWED_RATE_70_PERCENT_HIGHER = "IAB_VIEWED_RATE_70_PERCENT_HIGHER"
    IAB_VIEWED_RATE_65_PERCENT_HIGHER = "IAB_VIEWED_RATE_65_PERCENT_HIGHER"
    IAB_VIEWED_RATE_60_PERCENT_HIGHER = "IAB_VIEWED_RATE_60_PERCENT_HIGHER"
    IAB_VIEWED_RATE_55_PERCENT_HIGHER = "IAB_VIEWED_RATE_55_PERCENT_HIGHER"
    IAB_VIEWED_RATE_50_PERCENT_HIGHER = "IAB_VIEWED_RATE_50_PERCENT_HIGHER"
    IAB_VIEWED_RATE_40_PERCENT_HIGHER = "IAB_VIEWED_RATE_40_PERCENT_HIGHER"
    IAB_VIEWED_RATE_30_PERCENT_HIGHER = "IAB_VIEWED_RATE_30_PERCENT_HIGHER"

class DoubleVerifyDisplayViewabilityViewableDuringEnum(str, Enum):
    AVERAGE_VIEW_DURATION_UNSPECIFIED = "AVERAGE_VIEW_DURATION_UNSPECIFIED"
    AVERAGE_VIEW_DURATION_5_SEC = "AVERAGE_VIEW_DURATION_5_SEC"
    AVERAGE_VIEW_DURATION_10_SEC = "AVERAGE_VIEW_DURATION_10_SEC"
    AVERAGE_VIEW_DURATION_15_SEC = "AVERAGE_VIEW_DURATION_15_SEC"


@dataclass_json
@dataclass
class DoubleVerifyDisplayViewability:
    iab: Optional[DoubleVerifyDisplayViewabilityIabEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iab' }})
    viewable_during: Optional[DoubleVerifyDisplayViewabilityViewableDuringEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'viewableDuring' }})
    

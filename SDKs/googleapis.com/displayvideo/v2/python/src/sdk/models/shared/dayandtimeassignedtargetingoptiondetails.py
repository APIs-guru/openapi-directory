from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum(str, Enum):
    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"

class DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum(str, Enum):
    TIME_ZONE_RESOLUTION_UNSPECIFIED = "TIME_ZONE_RESOLUTION_UNSPECIFIED"
    TIME_ZONE_RESOLUTION_END_USER = "TIME_ZONE_RESOLUTION_END_USER"
    TIME_ZONE_RESOLUTION_ADVERTISER = "TIME_ZONE_RESOLUTION_ADVERTISER"


@dataclass_json
@dataclass
class DayAndTimeAssignedTargetingOptionDetails:
    day_of_week: Optional[DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfWeek' }})
    end_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endHour' }})
    start_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startHour' }})
    time_zone_resolution: Optional[DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZoneResolution' }})
    

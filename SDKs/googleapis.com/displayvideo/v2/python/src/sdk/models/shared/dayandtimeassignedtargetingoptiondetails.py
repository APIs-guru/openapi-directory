from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""DayAndTimeAssignedTargetingOptionDetails
    Representation of a segment of time defined on a specific day of the week and with a start and end time. The time represented by `start_hour` must be before the time represented by `end_hour`.
    """
    
    day_of_week: Optional[DayAndTimeAssignedTargetingOptionDetailsDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfWeek') }})
    end_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endHour') }})
    start_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startHour') }})
    time_zone_resolution: Optional[DayAndTimeAssignedTargetingOptionDetailsTimeZoneResolutionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZoneResolution') }})
    

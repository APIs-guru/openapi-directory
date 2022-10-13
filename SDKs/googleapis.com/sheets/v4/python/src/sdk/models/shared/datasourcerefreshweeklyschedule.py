from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import timeofday

class DataSourceRefreshWeeklyScheduleDaysOfWeekEnum(str, Enum):
    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"


@dataclass_json
@dataclass
class DataSourceRefreshWeeklySchedule:
    days_of_week: Optional[List[DataSourceRefreshWeeklyScheduleDaysOfWeekEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daysOfWeek' }})
    start_time: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""DataSourceRefreshWeeklySchedule
    A weekly schedule for data to refresh on specific days in a given time interval.
    """
    
    days_of_week: Optional[List[DataSourceRefreshWeeklyScheduleDaysOfWeekEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('daysOfWeek') }})
    start_time: Optional[TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

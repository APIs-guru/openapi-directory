from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccessSchedule:
    r"""AccessSchedule
    An entity representing a user's access schedule.
    """
    
    day_of_week: DynamicDayOfWeekEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DayOfWeek') }})
    end_hour: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndHour') }})
    id: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Id') }})
    start_hour: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartHour') }})
    user_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserId') }})
    

@dataclass_json
@dataclass
class AccessScheduleInput:
    r"""AccessScheduleInput
    An entity representing a user's access schedule.
    """
    
    day_of_week: DynamicDayOfWeekEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DayOfWeek') }})
    end_hour: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndHour') }})
    start_hour: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartHour') }})
    

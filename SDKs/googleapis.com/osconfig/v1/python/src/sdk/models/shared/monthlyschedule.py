from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MonthlySchedule:
    r"""MonthlySchedule
    Represents a monthly schedule. An example of a valid monthly schedule is \"on the third Tuesday of the month\" or \"on the 15th of the month\".
    """
    
    month_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('monthDay') }})
    week_day_of_month: Optional[WeekDayOfMonth] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekDayOfMonth') }})
    

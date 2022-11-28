from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WeeklyMaintenanceWindowDayEnum(str, Enum):
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
class WeeklyMaintenanceWindowInput:
    r"""WeeklyMaintenanceWindowInput
    Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
    """
    
    day: Optional[WeeklyMaintenanceWindowDayEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    start_time: Optional[TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

@dataclass_json
@dataclass
class WeeklyMaintenanceWindow:
    r"""WeeklyMaintenanceWindow
    Time window in which disruptive maintenance updates occur. Non-disruptive updates can occur inside or outside this window.
    """
    
    day: Optional[WeeklyMaintenanceWindowDayEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    start_time: Optional[TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TaskTriggerInfo:
    r"""TaskTriggerInfo
    Class TaskTriggerInfo.
    """
    
    day_of_week: Optional[DayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DayOfWeek') }})
    interval_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IntervalTicks') }})
    max_runtime_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxRuntimeTicks') }})
    time_of_day_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TimeOfDayTicks') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    

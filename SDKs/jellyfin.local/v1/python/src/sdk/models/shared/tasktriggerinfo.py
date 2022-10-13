from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import dayofweek_enum


@dataclass_json
@dataclass
class TaskTriggerInfo:
    day_of_week: Optional[dayofweek_enum.DayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DayOfWeek' }})
    interval_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IntervalTicks' }})
    max_runtime_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxRuntimeTicks' }})
    time_of_day_ticks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeOfDayTicks' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    

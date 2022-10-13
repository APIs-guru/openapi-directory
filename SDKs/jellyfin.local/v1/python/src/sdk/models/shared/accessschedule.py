from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import dynamicdayofweek_enum


@dataclass_json
@dataclass
class AccessSchedule:
    day_of_week: dynamicdayofweek_enum.DynamicDayOfWeekEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DayOfWeek' }})
    end_hour: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndHour' }})
    id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    start_hour: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartHour' }})
    user_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserId' }})
    

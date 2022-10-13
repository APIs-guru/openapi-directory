from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timeofday


@dataclass_json
@dataclass
class DataSourceRefreshDailySchedule:
    start_time: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    

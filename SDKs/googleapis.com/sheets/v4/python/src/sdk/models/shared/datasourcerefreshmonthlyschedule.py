from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import timeofday


@dataclass_json
@dataclass
class DataSourceRefreshMonthlySchedule:
    days_of_month: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'daysOfMonth' }})
    start_time: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    

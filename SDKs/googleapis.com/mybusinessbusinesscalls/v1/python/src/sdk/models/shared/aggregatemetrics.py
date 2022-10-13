from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import date
from . import hourlymetrics
from . import date
from . import weekdaymetrics


@dataclass_json
@dataclass
class AggregateMetrics:
    answered_calls_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'answeredCallsCount' }})
    end_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    hourly_metrics: Optional[List[hourlymetrics.HourlyMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourlyMetrics' }})
    missed_calls_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missedCallsCount' }})
    start_date: Optional[date.Date] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate' }})
    weekday_metrics: Optional[List[weekdaymetrics.WeekDayMetrics]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weekdayMetrics' }})
    

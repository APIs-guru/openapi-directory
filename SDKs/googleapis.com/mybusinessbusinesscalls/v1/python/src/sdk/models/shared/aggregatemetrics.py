from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AggregateMetrics:
    r"""AggregateMetrics
    Metrics aggregated over the input time range.
    """
    
    answered_calls_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('answeredCallsCount') }})
    end_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate') }})
    hourly_metrics: Optional[List[HourlyMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourlyMetrics') }})
    missed_calls_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('missedCallsCount') }})
    start_date: Optional[Date] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate') }})
    weekday_metrics: Optional[List[WeekDayMetrics]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekdayMetrics') }})
    

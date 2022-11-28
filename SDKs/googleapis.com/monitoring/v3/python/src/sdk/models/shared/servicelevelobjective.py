from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ServiceLevelObjectiveCalendarPeriodEnum(str, Enum):
    CALENDAR_PERIOD_UNSPECIFIED = "CALENDAR_PERIOD_UNSPECIFIED"
    DAY = "DAY"
    WEEK = "WEEK"
    FORTNIGHT = "FORTNIGHT"
    MONTH = "MONTH"
    QUARTER = "QUARTER"
    HALF = "HALF"
    YEAR = "YEAR"


@dataclass_json
@dataclass
class ServiceLevelObjective:
    r"""ServiceLevelObjective
    A Service-Level Objective (SLO) describes a level of desired good service. It consists of a service-level indicator (SLI), a performance goal, and a period over which the objective is to be evaluated against that goal. The SLO can use SLIs defined in a number of different manners. Typical SLOs might include \"99% of requests in each rolling week have latency below 200 milliseconds\" or \"99.5% of requests in each calendar month return successfully.\"
    """
    
    calendar_period: Optional[ServiceLevelObjectiveCalendarPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarPeriod') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    goal: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goal') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    rolling_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rollingPeriod') }})
    service_level_indicator: Optional[ServiceLevelIndicator] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceLevelIndicator') }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLabels') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import servicelevelindicator

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
    calendar_period: Optional[ServiceLevelObjectiveCalendarPeriodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarPeriod' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    goal: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goal' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    rolling_period: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rollingPeriod' }})
    service_level_indicator: Optional[servicelevelindicator.ServiceLevelIndicator] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceLevelIndicator' }})
    user_labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLabels' }})
    

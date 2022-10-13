from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googletypedate
from . import googletypetimeofday
from . import googleprivacydlpv2timezone

class GooglePrivacyDlpV2DateTimeDayOfWeekEnum(str, Enum):
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
class GooglePrivacyDlpV2DateTime:
    date: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    day_of_week: Optional[GooglePrivacyDlpV2DateTimeDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfWeek' }})
    time: Optional[googletypetimeofday.GoogleTypeTimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    time_zone: Optional[googleprivacydlpv2timezone.GooglePrivacyDlpV2TimeZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    

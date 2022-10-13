from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googletypedate
from . import googletypetimeofday

class GooglePrivacyDlpV2ValueDayOfWeekValueEnum(str, Enum):
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
class GooglePrivacyDlpV2Value:
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'booleanValue' }})
    date_value: Optional[googletypedate.GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateValue' }})
    day_of_week_value: Optional[GooglePrivacyDlpV2ValueDayOfWeekValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfWeekValue' }})
    float_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'floatValue' }})
    integer_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'integerValue' }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stringValue' }})
    time_value: Optional[googletypetimeofday.GoogleTypeTimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeValue' }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestampValue' }})
    

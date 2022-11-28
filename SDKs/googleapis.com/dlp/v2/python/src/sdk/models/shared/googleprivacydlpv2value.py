from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GooglePrivacyDlpV2Value
    Set of primitive values supported by the system. Note that for the purposes of inspection or transformation, the number of bytes considered to comprise a 'Value' is based on its representation as a UTF-8 encoded string. For example, if 'integer_value' is set to 123456789, the number of bytes would be counted as 9, even though an int64 only holds up to 8 bytes of data.
    """
    
    boolean_value: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanValue') }})
    date_value: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateValue') }})
    day_of_week_value: Optional[GooglePrivacyDlpV2ValueDayOfWeekValueEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfWeekValue') }})
    float_value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floatValue') }})
    integer_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('integerValue') }})
    string_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stringValue') }})
    time_value: Optional[GoogleTypeTimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeValue') }})
    timestamp_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestampValue') }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""GooglePrivacyDlpV2DateTime
    Message for a date time object. e.g. 2018-01-01, 5th August.
    """
    
    date_: Optional[GoogleTypeDate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    day_of_week: Optional[GooglePrivacyDlpV2DateTimeDayOfWeekEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfWeek') }})
    time: Optional[GoogleTypeTimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    time_zone: Optional[GooglePrivacyDlpV2TimeZone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    

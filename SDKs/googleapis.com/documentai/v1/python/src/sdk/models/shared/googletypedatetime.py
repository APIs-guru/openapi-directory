from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleTypeDateTime:
    r"""GoogleTypeDateTime
    Represents civil time (or occasionally physical time). This type can represent a civil time in one of a few possible ways: * When utc_offset is set and time_zone is unset: a civil time on a calendar day with a particular offset from UTC. * When time_zone is set and utc_offset is unset: a civil time on a calendar day in a particular time zone. * When neither time_zone nor utc_offset is set: a civil time on a calendar day in local time. The date is relative to the Proleptic Gregorian Calendar. If year, month, or day are 0, the DateTime is considered not to have a specific year, month, or day respectively. This type may also be used to represent a physical time if all the date and time fields are set and either case of the `time_offset` oneof is set. Consider using `Timestamp` message for physical time instead. If your use case also would like to store the user's timezone, that can be done in another field. This type is more flexible than some applications may want. Make sure to document and validate your application's limitations.
    """
    
    day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('day') }})
    hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hours') }})
    minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minutes') }})
    month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('month') }})
    nanos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nanos') }})
    seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    time_zone: Optional[GoogleTypeTimeZone] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    utc_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('utcOffset') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    

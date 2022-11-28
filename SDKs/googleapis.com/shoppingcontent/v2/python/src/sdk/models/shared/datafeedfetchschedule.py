from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DatafeedFetchSchedule:
    r"""DatafeedFetchSchedule
    The required fields vary based on the frequency of fetching. For a monthly fetch schedule, day_of_month and hour are required. For a weekly fetch schedule, weekday and hour are required. For a daily fetch schedule, only hour is required.
    """
    
    day_of_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dayOfMonth') }})
    fetch_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fetchUrl') }})
    hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hour') }})
    minute_of_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minuteOfHour') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paused') }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeZone') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    weekday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weekday') }})
    

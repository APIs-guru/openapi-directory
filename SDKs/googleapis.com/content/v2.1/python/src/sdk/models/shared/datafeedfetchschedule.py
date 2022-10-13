from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DatafeedFetchSchedule:
    day_of_month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfMonth' }})
    fetch_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fetchUrl' }})
    hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hour' }})
    minute_of_hour: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minuteOfHour' }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password' }})
    paused: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paused' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    weekday: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weekday' }})
    

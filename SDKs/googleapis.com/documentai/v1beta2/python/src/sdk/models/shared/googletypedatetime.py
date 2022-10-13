from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googletypetimezone


@dataclass_json
@dataclass
class GoogleTypeDateTime:
    day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'day' }})
    hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hours' }})
    minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minutes' }})
    month: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'month' }})
    nanos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nanos' }})
    seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seconds' }})
    time_zone: Optional[googletypetimezone.GoogleTypeTimeZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeZone' }})
    utc_offset: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utcOffset' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    

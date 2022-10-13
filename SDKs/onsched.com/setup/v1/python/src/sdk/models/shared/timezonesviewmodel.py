from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimezonesViewModel:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    timezone_ianna: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezoneIanna' }})
    tz_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tzOffset' }})
    

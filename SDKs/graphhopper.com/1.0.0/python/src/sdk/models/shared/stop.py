from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import address
from . import timewindow


@dataclass_json
@dataclass
class Stop:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    preparation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preparation_time' }})
    time_windows: Optional[List[timewindow.TimeWindow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_windows' }})
    

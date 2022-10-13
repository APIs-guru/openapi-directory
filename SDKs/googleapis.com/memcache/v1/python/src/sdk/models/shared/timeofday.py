from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TimeOfDay:
    hours: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hours' }})
    minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minutes' }})
    nanos: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nanos' }})
    seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seconds' }})
    

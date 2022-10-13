from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RepeatInputModel:
    frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frequency' }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    month_day: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthDay' }})
    month_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthType' }})
    weekdays: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weekdays' }})
    

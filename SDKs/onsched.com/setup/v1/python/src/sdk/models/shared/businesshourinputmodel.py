from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BusinessHourInputModel:
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    is24_hours: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is24Hours' }})
    is_open: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isOpen' }})
    start_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    

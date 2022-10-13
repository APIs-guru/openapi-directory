from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import timewindowbreak
from . import drivetimebreak
from . import address
from . import address


@dataclass_json
@dataclass
class Vehicle:
    break_: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'break' }})
    earliest_start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earliest_start' }})
    end_address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end_address' }})
    latest_end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latest_end' }})
    max_activities: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_activities' }})
    max_distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_distance' }})
    max_driving_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_driving_time' }})
    max_jobs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_jobs' }})
    min_jobs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'min_jobs' }})
    move_to_end_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'move_to_end_address' }})
    return_to_depot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'return_to_depot' }})
    skills: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skills' }})
    start_address: address.Address = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start_address' }})
    type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type_id' }})
    vehicle_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicle_id' }})
    

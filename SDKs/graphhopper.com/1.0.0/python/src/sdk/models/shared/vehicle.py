from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Vehicle:
    start_address: Address = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_address') }})
    vehicle_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_id') }})
    break_: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('break') }})
    earliest_start: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliest_start') }})
    end_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_address') }})
    latest_end: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latest_end') }})
    max_activities: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_activities') }})
    max_distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_distance') }})
    max_driving_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_driving_time') }})
    max_jobs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_jobs') }})
    min_jobs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('min_jobs') }})
    move_to_end_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('move_to_end_address') }})
    return_to_depot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('return_to_depot') }})
    skills: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skills') }})
    type_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type_id') }})
    

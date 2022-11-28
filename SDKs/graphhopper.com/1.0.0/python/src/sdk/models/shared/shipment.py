from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Shipment:
    delivery: Stop = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pickup: Stop = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickup') }})
    allowed_vehicles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_vehicles') }})
    disallowed_vehicles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disallowed_vehicles') }})
    max_time_in_vehicle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_time_in_vehicle') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    required_skills: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('required_skills') }})
    size: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    

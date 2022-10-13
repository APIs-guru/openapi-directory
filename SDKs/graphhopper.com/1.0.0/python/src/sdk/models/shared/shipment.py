from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stop
from . import stop


@dataclass_json
@dataclass
class Shipment:
    allowed_vehicles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_vehicles' }})
    delivery: stop.Stop = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delivery' }})
    disallowed_vehicles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disallowed_vehicles' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    max_time_in_vehicle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_time_in_vehicle' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pickup: stop.Stop = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickup' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    required_skills: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_skills' }})
    size: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    

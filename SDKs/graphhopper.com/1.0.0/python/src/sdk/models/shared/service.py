from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import address
from . import timewindow

class ServiceTypeEnum(str, Enum):
    SERVICE = "service"
    PICKUP = "pickup"
    DELIVERY = "delivery"


@dataclass_json
@dataclass
class Service:
    address: Optional[address.Address] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    allowed_vehicles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_vehicles' }})
    disallowed_vehicles: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disallowed_vehicles' }})
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    max_time_in_vehicle: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_time_in_vehicle' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    preparation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preparation_time' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'priority' }})
    required_skills: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_skills' }})
    size: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    time_windows: Optional[List[timewindow.TimeWindow]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_windows' }})
    type: Optional[ServiceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activity
from . import routepoint


@dataclass_json
@dataclass
class Route:
    activities: Optional[List[activity.Activity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activities' }})
    completion_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completion_time' }})
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    points: Optional[List[routepoint.RoutePoint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    preparation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preparation_time' }})
    service_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_duration' }})
    transport_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transport_time' }})
    vehicle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vehicle_id' }})
    waiting_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waiting_time' }})
    

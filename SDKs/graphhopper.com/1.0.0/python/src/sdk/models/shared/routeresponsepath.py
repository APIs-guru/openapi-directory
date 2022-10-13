from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RouteResponsePathInstructions:
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    exit_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exit_number' }})
    interval: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    sign: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sign' }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_name' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    turn_angle: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'turn_angle' }})
    

@dataclass_json
@dataclass
class RouteResponsePath:
    ascend: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ascend' }})
    bbox: Optional[List[float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bbox' }})
    descend: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'descend' }})
    details: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'details' }})
    distance: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    instructions: Optional[List[RouteResponsePathInstructions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instructions' }})
    points: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    points_encoded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points_encoded' }})
    points_order: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points_order' }})
    snapped_waypoints: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapped_waypoints' }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    

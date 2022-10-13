from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import snappedwaypoint


@dataclass_json
@dataclass
class ResponseAddress:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location_id' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    snapped_waypoint: Optional[snappedwaypoint.SnappedWaypoint] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapped_waypoint' }})
    street_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_hint' }})
    

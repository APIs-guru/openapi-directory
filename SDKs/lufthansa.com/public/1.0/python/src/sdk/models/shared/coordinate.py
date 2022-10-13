from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Coordinate:
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Longitude' }})
    

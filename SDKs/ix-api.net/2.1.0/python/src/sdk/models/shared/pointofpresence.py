from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PointOfPresence:
    devices: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    facility: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facility' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metro_area_network: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metro_area_network' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

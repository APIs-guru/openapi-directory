from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetroArea:
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    facilities: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facilities' }})
    iata_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iata_code' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metro_area_networks: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metro_area_networks' }})
    un_locode: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'un_locode' }})
    

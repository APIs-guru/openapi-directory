from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MetroAreaNetwork:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    metro_area: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metro_area' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pops: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pops' }})
    service_provider: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service_provider' }})
    

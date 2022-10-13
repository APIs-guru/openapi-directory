from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MappingSettings:
    map: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'map' }})
    remove: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remove' }})
    values: dict[str, str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'values' }})
    

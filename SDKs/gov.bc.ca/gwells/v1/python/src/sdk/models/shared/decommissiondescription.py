from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DecommissionDescription:
    end: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    material: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'material' }})
    observations: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'observations' }})
    start: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

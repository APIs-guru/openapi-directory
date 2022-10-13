from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Screen:
    assembly_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assembly_type' }})
    end: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    internal_diameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'internal_diameter' }})
    slot_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slot_size' }})
    start: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Field:
    max_occurs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxOccurs' }})
    min_occurs: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minOccurs' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    table: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'table' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

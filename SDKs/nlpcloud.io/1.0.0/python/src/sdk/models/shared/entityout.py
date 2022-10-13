from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EntityOut:
    end: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

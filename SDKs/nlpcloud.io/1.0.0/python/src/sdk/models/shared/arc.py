from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Arc:
    dir: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dir' }})
    end: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    start: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

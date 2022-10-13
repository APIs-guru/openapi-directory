from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Link:
    note: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    url: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    

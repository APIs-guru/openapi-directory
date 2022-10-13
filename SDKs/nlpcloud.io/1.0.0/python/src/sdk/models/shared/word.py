from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Word:
    tag: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    text: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    

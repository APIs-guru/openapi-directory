from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class VoteCount:
    option: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option' }})
    value: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    

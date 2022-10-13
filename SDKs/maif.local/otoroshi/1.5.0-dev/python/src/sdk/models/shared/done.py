from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Done:
    done: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'done' }})
    

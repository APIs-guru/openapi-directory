from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HsAlgoSettings:
    secret: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secret' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

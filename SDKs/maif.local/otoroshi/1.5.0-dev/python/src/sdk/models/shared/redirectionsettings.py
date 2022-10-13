from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RedirectionSettings:
    code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    enabled: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    to: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'to' }})
    

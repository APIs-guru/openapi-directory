from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import key
from . import value


@dataclass_json
@dataclass
class Entity:
    key: Optional[key.Key] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    properties: Optional[dict[str, value.Value]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'properties' }})
    

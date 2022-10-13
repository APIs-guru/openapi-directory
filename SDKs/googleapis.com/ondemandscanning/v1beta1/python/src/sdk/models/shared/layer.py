from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Layer:
    arguments: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arguments' }})
    directive: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directive' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class MemcacheParameters:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    params: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    

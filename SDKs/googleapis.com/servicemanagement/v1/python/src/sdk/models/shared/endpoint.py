from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Endpoint:
    allow_cors: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowCors' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    target: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    

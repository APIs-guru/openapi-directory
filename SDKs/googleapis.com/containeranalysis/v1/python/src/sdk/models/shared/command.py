from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Command:
    args: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'args' }})
    dir: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dir' }})
    env: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'env' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    wait_for: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'waitFor' }})
    

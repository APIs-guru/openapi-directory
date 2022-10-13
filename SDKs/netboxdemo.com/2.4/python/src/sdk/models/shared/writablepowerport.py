from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WritablePowerPort:
    connection_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_status' }})
    device: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    power_outlet: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'power_outlet' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    

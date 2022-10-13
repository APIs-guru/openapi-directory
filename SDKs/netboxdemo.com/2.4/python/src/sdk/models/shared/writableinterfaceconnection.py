from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WritableInterfaceConnection:
    connection_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_status' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interface_a: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface_a' }})
    interface_b: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface_b' }})
    

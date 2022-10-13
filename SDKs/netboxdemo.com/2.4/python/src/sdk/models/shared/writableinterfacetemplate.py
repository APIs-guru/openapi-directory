from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WritableInterfaceTemplate:
    device_type: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_type' }})
    form_factor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'form_factor' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    mgmt_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mgmt_only' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

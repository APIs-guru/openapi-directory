from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GrantPermissionsEnum(str, Enum):
    READ_ONLY = "read_only"
    READ_WRITE = "read_write"


@dataclass_json
@dataclass
class Grant:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    permissions: Optional[GrantPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SecretVersionStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    DESTROYED = "DESTROYED"


@dataclass_json
@dataclass
class SecretVersion:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    destroy_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destroyTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[SecretVersionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

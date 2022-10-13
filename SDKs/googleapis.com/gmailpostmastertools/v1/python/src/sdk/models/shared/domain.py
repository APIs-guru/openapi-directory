from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DomainPermissionEnum(str, Enum):
    PERMISSION_UNSPECIFIED = "PERMISSION_UNSPECIFIED"
    OWNER = "OWNER"
    READER = "READER"
    NONE = "NONE"


@dataclass_json
@dataclass
class Domain:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    permission: Optional[DomainPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

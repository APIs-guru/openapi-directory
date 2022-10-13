from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GlobalPermissionPermissionEnum(str, Enum):
    PERMISSION_UNSPECIFIED = "PERMISSION_UNSPECIFIED"
    CREATE_COURSE = "CREATE_COURSE"


@dataclass_json
@dataclass
class GlobalPermission:
    permission: Optional[GlobalPermissionPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

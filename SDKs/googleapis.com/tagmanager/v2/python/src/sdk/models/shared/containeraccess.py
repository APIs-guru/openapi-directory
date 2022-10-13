from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class ContainerAccessPermissionEnum(str, Enum):
    CONTAINER_PERMISSION_UNSPECIFIED = "containerPermissionUnspecified"
    NO_ACCESS = "noAccess"
    READ = "read"
    EDIT = "edit"
    APPROVE = "approve"
    PUBLISH = "publish"


@dataclass_json
@dataclass
class ContainerAccess:
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    permission: Optional[ContainerAccessPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

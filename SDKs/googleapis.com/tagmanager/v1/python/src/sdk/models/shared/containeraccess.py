from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ContainerAccessPermissionEnum(str, Enum):
    READ = "read"
    EDIT = "edit"
    PUBLISH = "publish"
    DELETE = "delete"
    MANAGE = "manage"
    EDIT_WORKSPACE = "editWorkspace"


@dataclass_json
@dataclass
class ContainerAccess:
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerId' }})
    permission: Optional[List[ContainerAccessPermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    

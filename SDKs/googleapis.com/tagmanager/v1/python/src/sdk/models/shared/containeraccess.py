from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ContainerAccess
    Defines the Google Tag Manager Container access permissions.
    """
    
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerId') }})
    permission: Optional[List[ContainerAccessPermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""ContainerAccess
    Defines the Google Tag Manager Container access permissions.
    """
    
    container_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerId') }})
    permission: Optional[ContainerAccessPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

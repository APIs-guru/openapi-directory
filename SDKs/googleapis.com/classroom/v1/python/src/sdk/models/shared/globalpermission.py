from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GlobalPermissionPermissionEnum(str, Enum):
    PERMISSION_UNSPECIFIED = "PERMISSION_UNSPECIFIED"
    CREATE_COURSE = "CREATE_COURSE"


@dataclass_json
@dataclass
class GlobalPermission:
    r"""GlobalPermission
    Global user permission description.
    """
    
    permission: Optional[GlobalPermissionPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

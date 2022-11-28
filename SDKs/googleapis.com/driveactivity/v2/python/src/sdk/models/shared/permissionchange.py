from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PermissionChange:
    r"""PermissionChange
    A change of the permission setting on an item.
    """
    
    added_permissions: Optional[List[Permission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedPermissions') }})
    removed_permissions: Optional[List[Permission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedPermissions') }})
    

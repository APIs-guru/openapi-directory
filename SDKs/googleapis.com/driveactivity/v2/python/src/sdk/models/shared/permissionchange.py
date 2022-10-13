from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import permission
from . import permission


@dataclass_json
@dataclass
class PermissionChange:
    added_permissions: Optional[List[permission.Permission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addedPermissions' }})
    removed_permissions: Optional[List[permission.Permission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removedPermissions' }})
    

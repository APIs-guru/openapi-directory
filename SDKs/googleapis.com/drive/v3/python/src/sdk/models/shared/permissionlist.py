from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import permission


@dataclass_json
@dataclass
class PermissionList:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    permissions: Optional[List[permission.Permission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userpermission


@dataclass_json
@dataclass
class ListUserPermissionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    user_permission: Optional[List[userpermission.UserPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userPermission' }})
    

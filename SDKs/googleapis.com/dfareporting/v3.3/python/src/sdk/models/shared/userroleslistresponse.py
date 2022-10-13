from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userrole


@dataclass_json
@dataclass
class UserRolesListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    user_roles: Optional[List[userrole.UserRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRoles' }})
    

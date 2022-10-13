from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import role


@dataclass_json
@dataclass
class QueryGrantableRolesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    roles: Optional[List[role.Role]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    

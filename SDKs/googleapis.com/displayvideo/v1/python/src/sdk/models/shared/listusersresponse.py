from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import user


@dataclass_json
@dataclass
class ListUsersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    users: Optional[List[user.User]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userlist


@dataclass_json
@dataclass
class ListUserListsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    user_lists: Optional[List[userlist.UserList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userLists' }})
    

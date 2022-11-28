from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListUserListsResponse:
    r"""ListUserListsResponse
    The list user list response.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    user_lists: Optional[List[UserList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userLists') }})
    

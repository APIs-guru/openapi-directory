from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchGroupsResponse:
    r"""SearchGroupsResponse
    The response message for GroupsService.SearchGroups.
    """
    
    groups: Optional[List[Group]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groups') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

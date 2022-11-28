from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListContactGroupsResponse:
    r"""ListContactGroupsResponse
    The response to a list contact groups request.
    """
    
    contact_groups: Optional[List[ContactGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactGroups') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    next_sync_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextSyncToken') }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalItems') }})
    

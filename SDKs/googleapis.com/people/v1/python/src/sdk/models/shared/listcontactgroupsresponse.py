from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import contactgroup


@dataclass_json
@dataclass
class ListContactGroupsResponse:
    contact_groups: Optional[List[contactgroup.ContactGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactGroups' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    next_sync_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextSyncToken' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    

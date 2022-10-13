from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import person


@dataclass_json
@dataclass
class ListOtherContactsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    next_sync_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextSyncToken' }})
    other_contacts: Optional[List[person.Person]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'otherContacts' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import person


@dataclass_json
@dataclass
class ListConnectionsResponse:
    connections: Optional[List[person.Person]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connections' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    next_sync_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextSyncToken' }})
    total_items: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalItems' }})
    total_people: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalPeople' }})
    

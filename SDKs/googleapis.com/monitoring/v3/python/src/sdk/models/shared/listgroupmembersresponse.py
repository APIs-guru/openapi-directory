from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import monitoredresource


@dataclass_json
@dataclass
class ListGroupMembersResponse:
    members: Optional[List[monitoredresource.MonitoredResource]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'members' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    

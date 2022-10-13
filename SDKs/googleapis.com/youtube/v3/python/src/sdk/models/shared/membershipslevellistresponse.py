from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import membershipslevel


@dataclass_json
@dataclass
class MembershipsLevelListResponse:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    items: Optional[List[membershipslevel.MembershipsLevel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    visitor_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'visitorId' }})
    

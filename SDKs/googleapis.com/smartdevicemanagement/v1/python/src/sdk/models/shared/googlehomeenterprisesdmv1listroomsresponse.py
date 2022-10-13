from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlehomeenterprisesdmv1room


@dataclass_json
@dataclass
class GoogleHomeEnterpriseSdmV1ListRoomsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    rooms: Optional[List[googlehomeenterprisesdmv1room.GoogleHomeEnterpriseSdmV1Room]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rooms' }})
    

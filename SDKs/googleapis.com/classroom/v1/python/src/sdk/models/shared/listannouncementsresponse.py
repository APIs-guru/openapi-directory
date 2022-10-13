from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import announcement


@dataclass_json
@dataclass
class ListAnnouncementsResponse:
    announcements: Optional[List[announcement.Announcement]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'announcements' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

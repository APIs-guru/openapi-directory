from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import locationlist


@dataclass_json
@dataclass
class ListLocationListsResponse:
    location_lists: Optional[List[locationlist.LocationList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationLists' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

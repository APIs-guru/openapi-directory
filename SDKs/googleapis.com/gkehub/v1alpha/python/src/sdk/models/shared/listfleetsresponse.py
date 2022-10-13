from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import fleet


@dataclass_json
@dataclass
class ListFleetsResponse:
    fleets: Optional[List[fleet.Fleet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fleets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

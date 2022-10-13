from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import beacon


@dataclass_json
@dataclass
class ListBeaconsResponse:
    beacons: Optional[List[beacon.Beacon]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'beacons' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalCount' }})
    

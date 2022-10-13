from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import zone


@dataclass_json
@dataclass
class ListZonesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    zone: Optional[List[zone.Zone]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zone' }})
    

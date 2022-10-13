from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import peering


@dataclass_json
@dataclass
class ListPeeringsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    peerings: Optional[List[peering.Peering]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peerings' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

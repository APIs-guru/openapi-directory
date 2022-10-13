from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import usablesubnetwork


@dataclass_json
@dataclass
class ListUsableSubnetworksResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    subnetworks: Optional[List[usablesubnetwork.UsableSubnetwork]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subnetworks' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectivitytest


@dataclass_json
@dataclass
class ListConnectivityTestsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    resources: Optional[List[connectivitytest.ConnectivityTest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

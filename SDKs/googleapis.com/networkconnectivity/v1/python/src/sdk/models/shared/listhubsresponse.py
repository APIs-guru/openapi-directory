from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hub


@dataclass_json
@dataclass
class ListHubsResponse:
    hubs: Optional[List[hub.Hub]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hubs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import httproute


@dataclass_json
@dataclass
class ListHTTPRoutesResponse:
    http_routes: Optional[List[httproute.HTTPRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'httpRoutes' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

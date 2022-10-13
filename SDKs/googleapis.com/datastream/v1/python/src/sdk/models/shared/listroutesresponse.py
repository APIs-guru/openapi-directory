from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import route


@dataclass_json
@dataclass
class ListRoutesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    routes: Optional[List[route.Route]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routes' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

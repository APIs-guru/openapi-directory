from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import federation


@dataclass_json
@dataclass
class ListFederationsResponse:
    federations: Optional[List[federation.Federation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'federations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

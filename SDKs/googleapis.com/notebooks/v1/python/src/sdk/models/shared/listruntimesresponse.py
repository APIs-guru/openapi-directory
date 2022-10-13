from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import runtime


@dataclass_json
@dataclass
class ListRuntimesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    runtimes: Optional[List[runtime.Runtime]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runtimes' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

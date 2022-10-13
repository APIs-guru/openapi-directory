from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trace


@dataclass_json
@dataclass
class ListTracesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    traces: Optional[List[trace.Trace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'traces' }})
    

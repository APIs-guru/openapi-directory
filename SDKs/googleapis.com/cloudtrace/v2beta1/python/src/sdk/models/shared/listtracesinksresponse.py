from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tracesink


@dataclass_json
@dataclass
class ListTraceSinksResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    sinks: Optional[List[tracesink.TraceSink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sinks' }})
    

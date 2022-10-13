from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logsink


@dataclass_json
@dataclass
class ListSinksResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    sinks: Optional[List[logsink.LogSink]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sinks' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import thread


@dataclass_json
@dataclass
class ListThreadsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    result_size_estimate: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultSizeEstimate' }})
    threads: Optional[List[thread.Thread]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'threads' }})
    

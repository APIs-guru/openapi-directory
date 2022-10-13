from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import queue


@dataclass_json
@dataclass
class ListQueuesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    queues: Optional[List[queue.Queue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'queues' }})
    

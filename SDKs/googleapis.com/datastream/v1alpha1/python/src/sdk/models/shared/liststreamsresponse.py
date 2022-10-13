from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stream


@dataclass_json
@dataclass
class ListStreamsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    streams: Optional[List[stream.Stream]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streams' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

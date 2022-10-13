from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import write


@dataclass_json
@dataclass
class WriteRequest:
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    stream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamId' }})
    stream_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streamToken' }})
    writes: Optional[List[write.Write]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'writes' }})
    

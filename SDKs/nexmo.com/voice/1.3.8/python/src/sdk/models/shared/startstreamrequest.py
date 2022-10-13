from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartStreamRequest:
    level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'level' }})
    loop: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loop' }})
    stream_url: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stream_url' }})
    

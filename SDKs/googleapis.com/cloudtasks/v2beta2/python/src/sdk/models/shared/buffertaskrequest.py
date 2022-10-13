from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import httpbody


@dataclass_json
@dataclass
class BufferTaskRequest:
    body: Optional[httpbody.HTTPBody] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body' }})
    

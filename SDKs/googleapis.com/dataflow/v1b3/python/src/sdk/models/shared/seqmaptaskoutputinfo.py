from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import sink


@dataclass_json
@dataclass
class SeqMapTaskOutputInfo:
    sink: Optional[sink.Sink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sink' }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tag' }})
    

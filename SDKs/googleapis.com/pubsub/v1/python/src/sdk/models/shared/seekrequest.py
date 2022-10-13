from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SeekRequest:
    snapshot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshot' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    

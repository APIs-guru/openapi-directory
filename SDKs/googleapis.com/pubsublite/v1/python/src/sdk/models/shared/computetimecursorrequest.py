from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import timetarget


@dataclass_json
@dataclass
class ComputeTimeCursorRequest:
    partition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partition' }})
    target: Optional[timetarget.TimeTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    

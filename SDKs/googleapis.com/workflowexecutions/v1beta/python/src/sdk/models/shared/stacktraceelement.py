from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import position


@dataclass_json
@dataclass
class StackTraceElement:
    position: Optional[position.Position] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    routine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routine' }})
    step: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'step' }})
    

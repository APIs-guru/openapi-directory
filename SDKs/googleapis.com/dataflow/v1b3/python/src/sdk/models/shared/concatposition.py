from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import position


@dataclass_json
@dataclass
class ConcatPosition:
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    position: Optional[position.Position] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    

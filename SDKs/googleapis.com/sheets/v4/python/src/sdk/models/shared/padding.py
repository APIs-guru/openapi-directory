from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Padding:
    bottom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bottom' }})
    left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'left' }})
    right: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'right' }})
    top: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'top' }})
    

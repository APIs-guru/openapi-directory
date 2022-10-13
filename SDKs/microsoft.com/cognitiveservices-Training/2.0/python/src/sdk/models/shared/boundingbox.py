from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BoundingBox:
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    left: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'left' }})
    top: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'top' }})
    width: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    

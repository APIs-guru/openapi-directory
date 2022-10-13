from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Bin:
    density: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'density' }})
    end: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    

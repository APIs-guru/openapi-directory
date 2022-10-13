from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gridrange


@dataclass_json
@dataclass
class RandomizeRangeRequest:
    range: Optional[gridrange.GridRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    

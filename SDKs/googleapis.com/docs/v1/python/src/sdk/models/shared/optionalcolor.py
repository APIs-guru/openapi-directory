from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import color


@dataclass_json
@dataclass
class OptionalColor:
    color: Optional[color.Color] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    

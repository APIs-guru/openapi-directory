from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import optionalcolor


@dataclass_json
@dataclass
class Shading:
    background_color: Optional[optionalcolor.OptionalColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColor' }})
    

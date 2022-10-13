from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import solidfill


@dataclass_json
@dataclass
class OutlineFill:
    solid_fill: Optional[solidfill.SolidFill] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'solidFill' }})
    

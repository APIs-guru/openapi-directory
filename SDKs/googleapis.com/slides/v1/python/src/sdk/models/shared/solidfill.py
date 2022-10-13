from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import opaquecolor


@dataclass_json
@dataclass
class SolidFill:
    alpha: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alpha' }})
    color: Optional[opaquecolor.OpaqueColor] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    

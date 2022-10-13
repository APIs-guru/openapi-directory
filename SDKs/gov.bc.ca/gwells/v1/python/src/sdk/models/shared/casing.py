from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Casing:
    casing_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'casing_code' }})
    casing_material: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'casing_material' }})
    diameter: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diameter' }})
    drive_shoe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drive_shoe' }})
    end: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'end' }})
    start: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'start' }})
    wall_thickness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wall_thickness' }})
    

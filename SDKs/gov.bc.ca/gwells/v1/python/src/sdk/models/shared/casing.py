from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Casing:
    diameter: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diameter') }})
    end: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    casing_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('casing_code') }})
    casing_material: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('casing_material') }})
    drive_shoe: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive_shoe') }})
    wall_thickness: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wall_thickness') }})
    

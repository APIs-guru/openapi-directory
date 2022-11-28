from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Screen:
    assembly_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('assembly_type') }})
    end: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    start: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    internal_diameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('internal_diameter') }})
    slot_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slot_size') }})
    

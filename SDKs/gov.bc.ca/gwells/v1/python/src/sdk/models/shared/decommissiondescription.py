from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DecommissionDescription:
    end: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('end') }})
    material: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('material') }})
    start: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    observations: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observations') }})
    

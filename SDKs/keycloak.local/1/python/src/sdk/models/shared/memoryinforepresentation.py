from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MemoryInfoRepresentation:
    free: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('free') }})
    free_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freeFormated') }})
    free_percentage: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('freePercentage') }})
    total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    total_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalFormated') }})
    used: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('used') }})
    used_formated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedFormated') }})
    

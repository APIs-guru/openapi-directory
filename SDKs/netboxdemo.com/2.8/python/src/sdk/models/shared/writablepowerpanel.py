from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritablePowerPanelInput:
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    site: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    rack_group: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rack_group') }})
    

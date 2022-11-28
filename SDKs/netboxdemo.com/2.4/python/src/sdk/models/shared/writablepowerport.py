from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritablePowerPortInput:
    device: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    connection_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    power_outlet: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('power_outlet') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

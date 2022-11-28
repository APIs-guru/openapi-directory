from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritablePowerOutletTemplateInput:
    device_type: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('device_type') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

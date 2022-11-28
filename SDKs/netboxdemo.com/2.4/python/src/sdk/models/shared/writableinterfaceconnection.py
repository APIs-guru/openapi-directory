from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class WritableInterfaceConnectionInput:
    interface_a: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface_a') }})
    interface_b: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface_b') }})
    connection_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    

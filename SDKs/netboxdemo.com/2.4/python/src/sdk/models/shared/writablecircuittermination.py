from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WritableCircuitTerminationTerminationEnum(str, Enum):
    A = "A"
    Z = "Z"


@dataclass_json
@dataclass
class WritableCircuitTerminationInput:
    circuit: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('circuit') }})
    port_speed: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_speed') }})
    site: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    term_side: WritableCircuitTerminationTerminationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('term_side') }})
    interface: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interface') }})
    pp_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pp_info') }})
    upstream_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upstream_speed') }})
    xconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xconnect_id') }})
    

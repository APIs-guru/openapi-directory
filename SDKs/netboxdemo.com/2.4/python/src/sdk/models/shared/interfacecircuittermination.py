from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InterfaceCircuitTerminationTerminationEnum(str, Enum):
    A = "A"
    Z = "Z"


@dataclass_json
@dataclass
class InterfaceCircuitTermination:
    port_speed: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_speed') }})
    term_side: InterfaceCircuitTerminationTerminationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('term_side') }})
    circuit: Optional[InterfaceNestedCircuit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('circuit') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pp_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pp_info') }})
    upstream_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upstream_speed') }})
    xconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xconnect_id') }})
    

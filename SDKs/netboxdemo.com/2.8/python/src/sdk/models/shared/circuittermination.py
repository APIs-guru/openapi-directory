from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CircuitTerminationConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclass
class CircuitTerminationConnectionStatus:
    label: CircuitTerminationConnectionStatusLabelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    value: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
class CircuitTerminationTerminationEnum(str, Enum):
    A = "A"
    Z = "Z"


@dataclass_json
@dataclass
class CircuitTermination:
    circuit: NestedCircuit = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('circuit') }})
    port_speed: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('port_speed') }})
    site: NestedSite = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('site') }})
    term_side: CircuitTerminationTerminationEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('term_side') }})
    cable: Optional[NestedCable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cable') }})
    connected_endpoint: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected_endpoint') }})
    connected_endpoint_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connected_endpoint_type') }})
    connection_status: Optional[CircuitTerminationConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('connection_status') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    pp_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pp_info') }})
    upstream_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('upstream_speed') }})
    xconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('xconnect_id') }})
    

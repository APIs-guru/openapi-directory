from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nestedcable
from . import nestedcircuit
from . import nestedsite

class CircuitTerminationConnectionStatusLabelEnum(str, Enum):
    NOT_CONNECTED = "Not Connected"
    CONNECTED = "Connected"


@dataclass_json
@dataclass
class CircuitTerminationConnectionStatusConnectionStatus:
    label: CircuitTerminationConnectionStatusLabelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    value: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    
class CircuitTerminationTermSideTerminationEnum(str, Enum):
    A = "A"
    Z = "Z"


@dataclass_json
@dataclass
class CircuitTermination:
    cable: Optional[nestedcable.NestedCable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cable' }})
    circuit: nestedcircuit.NestedCircuit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'circuit' }})
    connected_endpoint: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected_endpoint' }})
    connected_endpoint_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected_endpoint_type' }})
    connection_status: Optional[CircuitTerminationConnectionStatusConnectionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_status' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    port_speed: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port_speed' }})
    pp_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pp_info' }})
    site: nestedsite.NestedSite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    term_side: CircuitTerminationTermSideTerminationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term_side' }})
    upstream_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upstream_speed' }})
    xconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xconnect_id' }})
    

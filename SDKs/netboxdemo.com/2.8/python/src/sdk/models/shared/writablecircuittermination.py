from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nestedcable

class WritableCircuitTerminationTermSideTerminationEnum(str, Enum):
    A = "A"
    Z = "Z"


@dataclass_json
@dataclass
class WritableCircuitTermination:
    cable: Optional[nestedcable.NestedCable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cable' }})
    circuit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'circuit' }})
    connected_endpoint: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected_endpoint' }})
    connected_endpoint_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected_endpoint_type' }})
    connection_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connection_status' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    port_speed: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port_speed' }})
    pp_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pp_info' }})
    site: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    term_side: WritableCircuitTerminationTermSideTerminationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term_side' }})
    upstream_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upstream_speed' }})
    xconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xconnect_id' }})
    

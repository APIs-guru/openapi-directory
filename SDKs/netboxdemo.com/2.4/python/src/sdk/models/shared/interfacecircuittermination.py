from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import interfacenestedcircuit

class InterfaceCircuitTerminationTerminationEnum(str, Enum):
    A = "A"
    Z = "Z"


@dataclass_json
@dataclass
class InterfaceCircuitTermination:
    circuit: Optional[interfacenestedcircuit.InterfaceNestedCircuit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'circuit' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    port_speed: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port_speed' }})
    pp_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pp_info' }})
    term_side: InterfaceCircuitTerminationTerminationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term_side' }})
    upstream_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upstream_speed' }})
    xconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xconnect_id' }})
    

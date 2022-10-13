from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import nestedcircuit
from . import nestedinterface
from . import nestedsite

class CircuitTerminationTermSideTerminationEnum(str, Enum):
    A = "A"
    Z = "Z"


@dataclass_json
@dataclass
class CircuitTermination:
    circuit: nestedcircuit.NestedCircuit = field(default=None, metadata={'dataclasses_json': { 'field_name': 'circuit' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interface: Optional[nestedinterface.NestedInterface] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface' }})
    port_speed: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port_speed' }})
    pp_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pp_info' }})
    site: nestedsite.NestedSite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    term_side: CircuitTerminationTermSideTerminationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term_side' }})
    upstream_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upstream_speed' }})
    xconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xconnect_id' }})
    

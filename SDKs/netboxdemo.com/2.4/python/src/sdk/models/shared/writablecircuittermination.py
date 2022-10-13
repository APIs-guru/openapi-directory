from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WritableCircuitTerminationTermSideTerminationEnum(str, Enum):
    A = "A"
    Z = "Z"


@dataclass_json
@dataclass
class WritableCircuitTermination:
    circuit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'circuit' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interface: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface' }})
    port_speed: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port_speed' }})
    pp_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pp_info' }})
    site: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    term_side: WritableCircuitTerminationTermSideTerminationEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'term_side' }})
    upstream_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upstream_speed' }})
    xconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xconnect_id' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nestedinterface
from . import nestedsite


@dataclass_json
@dataclass
class CircuitCircuitTermination:
    connected_endpoint: nestedinterface.NestedInterface = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connected_endpoint' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    port_speed: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'port_speed' }})
    site: nestedsite.NestedSite = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    upstream_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'upstream_speed' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    xconnect_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'xconnect_id' }})
    

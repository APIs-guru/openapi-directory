from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import serviceconfig

class ServiceStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    DISABLED = "DISABLED"
    ENABLED = "ENABLED"


@dataclass_json
@dataclass
class Service:
    config: Optional[serviceconfig.ServiceConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'config' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    state: Optional[ServiceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

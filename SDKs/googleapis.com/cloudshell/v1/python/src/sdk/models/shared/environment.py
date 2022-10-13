from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class EnvironmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SUSPENDED = "SUSPENDED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class Environment:
    docker_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dockerImage' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    public_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicKeys' }})
    ssh_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshHost' }})
    ssh_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshPort' }})
    ssh_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sshUsername' }})
    state: Optional[EnvironmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    web_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webHost' }})
    

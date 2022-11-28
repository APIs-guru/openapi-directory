from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EnvironmentStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    SUSPENDED = "SUSPENDED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    DELETING = "DELETING"


@dataclass_json
@dataclass
class Environment:
    r"""Environment
    A Cloud Shell environment, which is defined as the combination of a Docker image specifying what is installed on the environment and a home directory containing the user's data that will remain across sessions. Each user has at least an environment with the ID \"default\".
    """
    
    docker_image: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dockerImage') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    public_keys: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('publicKeys') }})
    ssh_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshHost') }})
    ssh_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshPort') }})
    ssh_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sshUsername') }})
    state: Optional[EnvironmentStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    web_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('webHost') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import networkconfig
from . import workerconfig

class WorkerPoolStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    RUNNING = "RUNNING"
    DELETING = "DELETING"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class WorkerPool:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleteTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    network_config: Optional[networkconfig.NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networkConfig' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    state: Optional[WorkerPoolStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    worker_config: Optional[workerconfig.WorkerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfig' }})
    

from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import workerconfig

class WorkerPoolRegionsEnum(str, Enum):
    REGION_UNSPECIFIED = "REGION_UNSPECIFIED"
    US_CENTRAL1 = "us-central1"
    US_WEST1 = "us-west1"
    US_EAST1 = "us-east1"
    US_EAST4 = "us-east4"

class WorkerPoolStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
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
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'projectId' }})
    regions: Optional[List[WorkerPoolRegionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceAccountEmail' }})
    status: Optional[WorkerPoolStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    worker_config: Optional[workerconfig.WorkerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfig' }})
    worker_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerCount' }})
    

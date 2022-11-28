from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""WorkerPool
    Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectId') }})
    regions: Optional[List[WorkerPoolRegionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regions') }})
    service_account_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccountEmail') }})
    status: Optional[WorkerPoolStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    worker_config: Optional[WorkerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    worker_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerCount') }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class WorkerPoolStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
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
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    state: Optional[WorkerPoolStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    worker_config: Optional[WorkerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    

@dataclass_json
@dataclass
class WorkerPoolInput:
    r"""WorkerPoolInput
    Configuration for a WorkerPool to run the builds. Workers are machines that Cloud Build uses to run your builds. By default, all workers run in a project owned by Cloud Build. To have full control over the workers that execute your builds -- such as enabling them to access private resources on your private network -- you can request Cloud Build to run the workers in your own project by creating a custom workers pool.
    """
    
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    worker_config: Optional[WorkerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    

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
    Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    delete_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleteTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etag') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    state: Optional[WorkerPoolStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    uid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uid') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    worker_config: Optional[WorkerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    

@dataclass_json
@dataclass
class WorkerPoolInput:
    r"""WorkerPoolInput
    Configuration for a `WorkerPool` to run the builds. Workers provide a build environment where Cloud Build runs your builds. Cloud Build owns and maintains a pool of workers for general use. By default, when you submit a build, Cloud Build uses one of the workers from this pool. Builds that run in the default worker pool have access to the public internet. If your build needs access to resources on a private network, create and use a `WorkerPool` to run your builds. Custom `WorkerPool`s give your builds access to any single VPC network that you administer, including any on-prem resources connected to that VPC network. For an overview of custom worker pools, see [Custom workers overview](https://cloud.google.com/cloud-build/docs/custom-workers/custom-workers-overview).
    """
    
    annotations: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    worker_config: Optional[WorkerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    

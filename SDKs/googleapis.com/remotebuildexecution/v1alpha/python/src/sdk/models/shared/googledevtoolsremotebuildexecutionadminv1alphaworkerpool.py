from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    RUNNING = "RUNNING"
    UPDATING = "UPDATING"
    DELETING = "DELETING"
    INACTIVE = "INACTIVE"


@dataclass_json
@dataclass
class GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool:
    r"""GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPool
    A worker pool resource in the Remote Build Execution API.
    """
    
    autoscale: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoscale') }})
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    host_os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostOs') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    worker_config: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerConfig') }})
    worker_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerCount') }})
    

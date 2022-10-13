from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googledevtoolsremotebuildexecutionadminv1alphaautoscale
from . import googledevtoolsremotebuildexecutionadminv1alphaworkerconfig

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
    autoscale: Optional[googledevtoolsremotebuildexecutionadminv1alphaautoscale.GoogleDevtoolsRemotebuildexecutionAdminV1alphaAutoscale] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoscale' }})
    channel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    host_os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostOs' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerPoolStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    worker_config: Optional[googledevtoolsremotebuildexecutionadminv1alphaworkerconfig.GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerConfig' }})
    worker_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerCount' }})
    

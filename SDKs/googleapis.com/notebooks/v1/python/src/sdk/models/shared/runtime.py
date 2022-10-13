from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import runtimeaccessconfig
from . import runtimemetrics
from . import runtimesoftwareconfig
from . import virtualmachine

class RuntimeHealthStateEnum(str, Enum):
    HEALTH_STATE_UNSPECIFIED = "HEALTH_STATE_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    AGENT_NOT_INSTALLED = "AGENT_NOT_INSTALLED"
    AGENT_NOT_RUNNING = "AGENT_NOT_RUNNING"

class RuntimeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    STARTING = "STARTING"
    PROVISIONING = "PROVISIONING"
    ACTIVE = "ACTIVE"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    DELETING = "DELETING"
    UPGRADING = "UPGRADING"
    INITIALIZING = "INITIALIZING"


@dataclass_json
@dataclass
class Runtime:
    access_config: Optional[runtimeaccessconfig.RuntimeAccessConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessConfig' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    health_state: Optional[RuntimeHealthStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthState' }})
    metrics: Optional[runtimemetrics.RuntimeMetrics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metrics' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    software_config: Optional[runtimesoftwareconfig.RuntimeSoftwareConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'softwareConfig' }})
    state: Optional[RuntimeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    virtual_machine: Optional[virtualmachine.VirtualMachine] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualMachine' }})
    

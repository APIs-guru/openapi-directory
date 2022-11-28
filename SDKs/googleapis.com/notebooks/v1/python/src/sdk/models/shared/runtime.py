from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Runtime
    The definition of a Runtime for a managed notebook instance.
    """
    
    access_config: Optional[RuntimeAccessConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessConfig') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    health_state: Optional[RuntimeHealthStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthState') }})
    metrics: Optional[RuntimeMetrics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metrics') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    software_config: Optional[RuntimeSoftwareConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    state: Optional[RuntimeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    virtual_machine: Optional[VirtualMachine] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachine') }})
    

@dataclass_json
@dataclass
class RuntimeInput:
    r"""RuntimeInput
    The definition of a Runtime for a managed notebook instance.
    """
    
    access_config: Optional[RuntimeAccessConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessConfig') }})
    software_config: Optional[RuntimeSoftwareConfigInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('softwareConfig') }})
    virtual_machine: Optional[VirtualMachineInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('virtualMachine') }})
    

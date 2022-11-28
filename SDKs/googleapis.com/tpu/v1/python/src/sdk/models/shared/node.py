from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NodeAPIVersionEnum(str, Enum):
    API_VERSION_UNSPECIFIED = "API_VERSION_UNSPECIFIED"
    V1_ALPHA1 = "V1_ALPHA1"
    V1 = "V1"
    V2_ALPHA1 = "V2_ALPHA1"

class NodeHealthEnum(str, Enum):
    HEALTH_UNSPECIFIED = "HEALTH_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    DEPRECATED_UNHEALTHY = "DEPRECATED_UNHEALTHY"
    TIMEOUT = "TIMEOUT"
    UNHEALTHY_TENSORFLOW = "UNHEALTHY_TENSORFLOW"
    UNHEALTHY_MAINTENANCE = "UNHEALTHY_MAINTENANCE"

class NodeStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    READY = "READY"
    RESTARTING = "RESTARTING"
    REIMAGING = "REIMAGING"
    DELETING = "DELETING"
    REPAIRING = "REPAIRING"
    STOPPED = "STOPPED"
    STOPPING = "STOPPING"
    STARTING = "STARTING"
    PREEMPTED = "PREEMPTED"
    TERMINATED = "TERMINATED"
    HIDING = "HIDING"
    HIDDEN = "HIDDEN"
    UNHIDING = "UNHIDING"


@dataclass_json
@dataclass
class NodeInput:
    r"""NodeInput
    A TPU instance.
    """
    
    accelerator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorType') }})
    cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrBlock') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    health: Optional[NodeHealthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    scheduling_config: Optional[SchedulingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingConfig') }})
    tensorflow_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tensorflowVersion') }})
    use_service_networking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useServiceNetworking') }})
    

@dataclass_json
@dataclass
class Node:
    r"""Node
    A TPU instance.
    """
    
    accelerator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorType') }})
    api_version: Optional[NodeAPIVersionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('apiVersion') }})
    cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrBlock') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    health: Optional[NodeHealthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    health_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthDescription') }})
    ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ipAddress') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('network') }})
    network_endpoints: Optional[List[NetworkEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkEndpoints') }})
    port: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('port') }})
    scheduling_config: Optional[SchedulingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingConfig') }})
    service_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    state: Optional[NodeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    symptoms: Optional[List[Symptom]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symptoms') }})
    tensorflow_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tensorflowVersion') }})
    use_service_networking: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('useServiceNetworking') }})
    

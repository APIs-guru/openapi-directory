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

class NodeHealthEnum(str, Enum):
    HEALTH_UNSPECIFIED = "HEALTH_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    TIMEOUT = "TIMEOUT"
    UNHEALTHY_TENSORFLOW = "UNHEALTHY_TENSORFLOW"
    UNHEALTHY_MAINTENANCE = "UNHEALTHY_MAINTENANCE"


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
    data_disks: Optional[List[AttachedDisk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisks') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    health: Optional[NodeHealthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    health_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('healthDescription') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    network_endpoints: Optional[List[NetworkEndpoint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkEndpoints') }})
    queued_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedResource') }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeVersion') }})
    scheduling_config: Optional[SchedulingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingConfig') }})
    service_account: Optional[ServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    shielded_instance_config: Optional[ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    state: Optional[NodeStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    symptoms: Optional[List[Symptom]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('symptoms') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass_json
@dataclass
class NodeInput:
    r"""NodeInput
    A TPU instance.
    """
    
    accelerator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorType') }})
    cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cidrBlock') }})
    data_disks: Optional[List[AttachedDisk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisks') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    health: Optional[NodeHealthEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('health') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    metadata: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    network_config: Optional[NetworkConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('networkConfig') }})
    runtime_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('runtimeVersion') }})
    scheduling_config: Optional[SchedulingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedulingConfig') }})
    service_account: Optional[ServiceAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceAccount') }})
    shielded_instance_config: Optional[ShieldedInstanceConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shieldedInstanceConfig') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

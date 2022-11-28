from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InstanceGroupConfigPreemptibilityEnum(str, Enum):
    PREEMPTIBILITY_UNSPECIFIED = "PREEMPTIBILITY_UNSPECIFIED"
    NON_PREEMPTIBLE = "NON_PREEMPTIBLE"
    PREEMPTIBLE = "PREEMPTIBLE"
    SPOT = "SPOT"


@dataclass_json
@dataclass
class InstanceGroupConfig:
    r"""InstanceGroupConfig
    The config settings for Compute Engine resources in an instance group, such as a master or worker group.
    """
    
    accelerators: Optional[List[AcceleratorConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    disk_config: Optional[DiskConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskConfig') }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    instance_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceNames') }})
    instance_references: Optional[List[InstanceReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instanceReferences') }})
    is_preemptible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isPreemptible') }})
    machine_type_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineTypeUri') }})
    managed_group_config: Optional[ManagedGroupConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedGroupConfig') }})
    min_cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCpuPlatform') }})
    num_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numInstances') }})
    preemptibility: Optional[InstanceGroupConfigPreemptibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptibility') }})
    

@dataclass_json
@dataclass
class InstanceGroupConfigInput:
    r"""InstanceGroupConfigInput
    The config settings for Compute Engine resources in an instance group, such as a master or worker group.
    """
    
    accelerators: Optional[List[AcceleratorConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    disk_config: Optional[DiskConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskConfig') }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageUri') }})
    machine_type_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineTypeUri') }})
    min_cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCpuPlatform') }})
    num_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('numInstances') }})
    preemptibility: Optional[InstanceGroupConfigPreemptibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptibility') }})
    

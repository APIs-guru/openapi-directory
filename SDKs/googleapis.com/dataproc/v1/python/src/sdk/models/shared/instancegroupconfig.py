from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import acceleratorconfig
from . import diskconfig
from . import instancereference
from . import managedgroupconfig

class InstanceGroupConfigPreemptibilityEnum(str, Enum):
    PREEMPTIBILITY_UNSPECIFIED = "PREEMPTIBILITY_UNSPECIFIED"
    NON_PREEMPTIBLE = "NON_PREEMPTIBLE"
    PREEMPTIBLE = "PREEMPTIBLE"
    SPOT = "SPOT"


@dataclass_json
@dataclass
class InstanceGroupConfig:
    accelerators: Optional[List[acceleratorconfig.AcceleratorConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accelerators' }})
    disk_config: Optional[diskconfig.DiskConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskConfig' }})
    image_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageUri' }})
    instance_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceNames' }})
    instance_references: Optional[List[instancereference.InstanceReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceReferences' }})
    is_preemptible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPreemptible' }})
    machine_type_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineTypeUri' }})
    managed_group_config: Optional[managedgroupconfig.ManagedGroupConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedGroupConfig' }})
    min_cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minCpuPlatform' }})
    num_instances: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'numInstances' }})
    preemptibility: Optional[InstanceGroupConfigPreemptibilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preemptibility' }})
    

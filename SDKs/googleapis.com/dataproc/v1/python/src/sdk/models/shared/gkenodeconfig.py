from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gkenodepoolacceleratorconfig


@dataclass_json
@dataclass
class GkeNodeConfig:
    accelerators: Optional[List[gkenodepoolacceleratorconfig.GkeNodePoolAcceleratorConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accelerators' }})
    boot_disk_kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootDiskKmsKey' }})
    local_ssd_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'localSsdCount' }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'machineType' }})
    min_cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minCpuPlatform' }})
    preemptible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preemptible' }})
    spot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spot' }})
    

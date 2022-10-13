from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import gpusharingconfig


@dataclass_json
@dataclass
class AcceleratorConfig:
    accelerator_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorCount' }})
    accelerator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorType' }})
    gpu_partition_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpuPartitionSize' }})
    gpu_sharing_config: Optional[gpusharingconfig.GpuSharingConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpuSharingConfig' }})
    max_time_shared_clients_per_gpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxTimeSharedClientsPerGpu' }})
    

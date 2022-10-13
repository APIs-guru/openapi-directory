from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GpuSharingConfigGpuSharingStrategyEnum(str, Enum):
    GPU_SHARING_STRATEGY_UNSPECIFIED = "GPU_SHARING_STRATEGY_UNSPECIFIED"
    TIME_SHARING = "TIME_SHARING"


@dataclass_json
@dataclass
class GpuSharingConfig:
    gpu_sharing_strategy: Optional[GpuSharingConfigGpuSharingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gpuSharingStrategy' }})
    max_shared_clients_per_gpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxSharedClientsPerGpu' }})
    

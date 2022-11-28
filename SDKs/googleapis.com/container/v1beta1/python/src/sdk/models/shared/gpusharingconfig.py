from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GpuSharingConfigGpuSharingStrategyEnum(str, Enum):
    GPU_SHARING_STRATEGY_UNSPECIFIED = "GPU_SHARING_STRATEGY_UNSPECIFIED"
    TIME_SHARING = "TIME_SHARING"


@dataclass_json
@dataclass
class GpuSharingConfig:
    r"""GpuSharingConfig
    GPUSharingConfig represents the GPU sharing configuration for Hardware Accelerators.
    """
    
    gpu_sharing_strategy: Optional[GpuSharingConfigGpuSharingStrategyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpuSharingStrategy') }})
    max_shared_clients_per_gpu: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxSharedClientsPerGpu') }})
    

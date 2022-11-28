from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class RuntimeAcceleratorConfigTypeEnum(str, Enum):
    ACCELERATOR_TYPE_UNSPECIFIED = "ACCELERATOR_TYPE_UNSPECIFIED"
    NVIDIA_TESLA_K80 = "NVIDIA_TESLA_K80"
    NVIDIA_TESLA_P100 = "NVIDIA_TESLA_P100"
    NVIDIA_TESLA_V100 = "NVIDIA_TESLA_V100"
    NVIDIA_TESLA_P4 = "NVIDIA_TESLA_P4"
    NVIDIA_TESLA_T4 = "NVIDIA_TESLA_T4"
    NVIDIA_TESLA_A100 = "NVIDIA_TESLA_A100"
    TPU_V2 = "TPU_V2"
    TPU_V3 = "TPU_V3"
    NVIDIA_TESLA_T4_VWS = "NVIDIA_TESLA_T4_VWS"
    NVIDIA_TESLA_P100_VWS = "NVIDIA_TESLA_P100_VWS"
    NVIDIA_TESLA_P4_VWS = "NVIDIA_TESLA_P4_VWS"


@dataclass_json
@dataclass
class RuntimeAcceleratorConfig:
    r"""RuntimeAcceleratorConfig
    Definition of the types of hardware accelerators that can be used. Definition of the types of hardware accelerators that can be used. See [Compute Engine AcceleratorTypes](https://cloud.google.com/compute/docs/reference/beta/acceleratorTypes). Examples: * `nvidia-tesla-k80` * `nvidia-tesla-p100` * `nvidia-tesla-v100` * `nvidia-tesla-p4` * `nvidia-tesla-t4` * `nvidia-tesla-a100`
    """
    
    core_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coreCount') }})
    type: Optional[RuntimeAcceleratorConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

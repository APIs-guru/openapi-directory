from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class SchedulerAcceleratorConfigTypeEnum(str, Enum):
    SCHEDULER_ACCELERATOR_TYPE_UNSPECIFIED = "SCHEDULER_ACCELERATOR_TYPE_UNSPECIFIED"
    NVIDIA_TESLA_K80 = "NVIDIA_TESLA_K80"
    NVIDIA_TESLA_P100 = "NVIDIA_TESLA_P100"
    NVIDIA_TESLA_V100 = "NVIDIA_TESLA_V100"
    NVIDIA_TESLA_P4 = "NVIDIA_TESLA_P4"
    NVIDIA_TESLA_T4 = "NVIDIA_TESLA_T4"
    NVIDIA_TESLA_A100 = "NVIDIA_TESLA_A100"
    TPU_V2 = "TPU_V2"
    TPU_V3 = "TPU_V3"


@dataclass_json
@dataclass
class SchedulerAcceleratorConfig:
    r"""SchedulerAcceleratorConfig
    Definition of a hardware accelerator. Note that not all combinations of `type` and `core_count` are valid. Check [GPUs on Compute Engine](https://cloud.google.com/compute/docs/gpus) to find a valid combination. TPUs are not supported.
    """
    
    core_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coreCount') }})
    type: Optional[SchedulerAcceleratorConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

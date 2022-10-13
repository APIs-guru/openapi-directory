from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AcceleratorConfigTypeEnum(str, Enum):
    ACCELERATOR_TYPE_UNSPECIFIED = "ACCELERATOR_TYPE_UNSPECIFIED"
    NVIDIA_TESLA_K80 = "NVIDIA_TESLA_K80"
    NVIDIA_TESLA_P100 = "NVIDIA_TESLA_P100"
    NVIDIA_TESLA_V100 = "NVIDIA_TESLA_V100"
    NVIDIA_TESLA_P4 = "NVIDIA_TESLA_P4"
    NVIDIA_TESLA_T4 = "NVIDIA_TESLA_T4"
    NVIDIA_TESLA_A100 = "NVIDIA_TESLA_A100"
    NVIDIA_TESLA_T4_VWS = "NVIDIA_TESLA_T4_VWS"
    NVIDIA_TESLA_P100_VWS = "NVIDIA_TESLA_P100_VWS"
    NVIDIA_TESLA_P4_VWS = "NVIDIA_TESLA_P4_VWS"
    TPU_V2 = "TPU_V2"
    TPU_V3 = "TPU_V3"


@dataclass_json
@dataclass
class AcceleratorConfig:
    core_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'coreCount' }})
    type: Optional[AcceleratorConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

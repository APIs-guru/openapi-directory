from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleCloudMlV1AcceleratorConfigTypeEnum(str, Enum):
    ACCELERATOR_TYPE_UNSPECIFIED = "ACCELERATOR_TYPE_UNSPECIFIED"
    NVIDIA_TESLA_K80 = "NVIDIA_TESLA_K80"
    NVIDIA_TESLA_P100 = "NVIDIA_TESLA_P100"
    NVIDIA_TESLA_V100 = "NVIDIA_TESLA_V100"
    NVIDIA_TESLA_P4 = "NVIDIA_TESLA_P4"
    NVIDIA_TESLA_T4 = "NVIDIA_TESLA_T4"
    NVIDIA_TESLA_A100 = "NVIDIA_TESLA_A100"
    TPU_V2 = "TPU_V2"
    TPU_V3 = "TPU_V3"
    TPU_V2_POD = "TPU_V2_POD"
    TPU_V3_POD = "TPU_V3_POD"


@dataclass_json
@dataclass
class GoogleCloudMlV1AcceleratorConfig:
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    type: Optional[GoogleCloudMlV1AcceleratorConfigTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

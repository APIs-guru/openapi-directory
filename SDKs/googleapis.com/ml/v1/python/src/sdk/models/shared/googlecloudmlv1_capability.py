from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum(str, Enum):
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

class GoogleCloudMlV1CapabilityTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    TRAINING = "TRAINING"
    BATCH_PREDICTION = "BATCH_PREDICTION"
    ONLINE_PREDICTION = "ONLINE_PREDICTION"


@dataclass_json
@dataclass
class GoogleCloudMlV1Capability:
    available_accelerators: Optional[List[GoogleCloudMlV1CapabilityAvailableAcceleratorsEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableAccelerators') }})
    type: Optional[GoogleCloudMlV1CapabilityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AcceleratorAcceleratorTypeEnum(str, Enum):
    ACCELERATOR_TYPE_UNSPECIFIED = "ACCELERATOR_TYPE_UNSPECIFIED"
    CDC = "CDC"
    HEALTHCARE = "HEALTHCARE"
    CCAI_INSIGHTS = "CCAI_INSIGHTS"

class AcceleratorStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ENABLED = "ENABLED"
    DISABLED = "DISABLED"
    UNKNOWN = "UNKNOWN"


@dataclass_json
@dataclass
class Accelerator:
    accelerator_type: Optional[AcceleratorAcceleratorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acceleratorType' }})
    state: Optional[AcceleratorStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

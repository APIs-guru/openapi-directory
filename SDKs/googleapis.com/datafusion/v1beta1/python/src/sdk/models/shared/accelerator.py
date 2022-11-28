from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AcceleratorAcceleratorTypeEnum(str, Enum):
    ACCELERATOR_TYPE_UNSPECIFIED = "ACCELERATOR_TYPE_UNSPECIFIED"
    CDC = "CDC"
    HEALTHCARE = "HEALTHCARE"


@dataclass_json
@dataclass
class Accelerator:
    r"""Accelerator
    Identifies Data Fusion accelerators for an instance.
    """
    
    accelerator_type: Optional[AcceleratorAcceleratorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorType') }})
    

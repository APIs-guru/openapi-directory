from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AcceleratorConfig:
    r"""AcceleratorConfig
    AcceleratorConfig represents a Hardware Accelerator request.
    """
    
    accelerator_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorCount') }})
    accelerator_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acceleratorType') }})
    gpu_partition_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpuPartitionSize') }})
    gpu_sharing_config: Optional[GpuSharingConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gpuSharingConfig') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GkeNodeConfig:
    r"""GkeNodeConfig
    Parameters that describe cluster nodes.
    """
    
    accelerators: Optional[List[GkeNodePoolAcceleratorConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accelerators') }})
    boot_disk_kms_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootDiskKmsKey') }})
    local_ssd_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('localSsdCount') }})
    machine_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('machineType') }})
    min_cpu_platform: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minCpuPlatform') }})
    preemptible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preemptible') }})
    spot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spot') }})
    

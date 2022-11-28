from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LinuxNodeConfigCgroupModeEnum(str, Enum):
    CGROUP_MODE_UNSPECIFIED = "CGROUP_MODE_UNSPECIFIED"
    CGROUP_MODE_V1 = "CGROUP_MODE_V1"
    CGROUP_MODE_V2 = "CGROUP_MODE_V2"


@dataclass_json
@dataclass
class LinuxNodeConfig:
    r"""LinuxNodeConfig
    Parameters that can be configured on Linux nodes.
    """
    
    cgroup_mode: Optional[LinuxNodeConfigCgroupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cgroupMode') }})
    sysctls: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sysctls') }})
    

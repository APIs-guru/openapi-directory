from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class LinuxNodeConfigCgroupModeEnum(str, Enum):
    CGROUP_MODE_UNSPECIFIED = "CGROUP_MODE_UNSPECIFIED"
    CGROUP_MODE_V1 = "CGROUP_MODE_V1"
    CGROUP_MODE_V2 = "CGROUP_MODE_V2"


@dataclass_json
@dataclass
class LinuxNodeConfig:
    cgroup_mode: Optional[LinuxNodeConfigCgroupModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cgroupMode' }})
    sysctls: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sysctls' }})
    

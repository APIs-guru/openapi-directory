from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import workloadconfig

class ProtectConfigWorkloadVulnerabilityModeEnum(str, Enum):
    WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED = "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
    DISABLED = "DISABLED"
    BASIC = "BASIC"


@dataclass_json
@dataclass
class ProtectConfig:
    workload_config: Optional[workloadconfig.WorkloadConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadConfig' }})
    workload_vulnerability_mode: Optional[ProtectConfigWorkloadVulnerabilityModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workloadVulnerabilityMode' }})
    

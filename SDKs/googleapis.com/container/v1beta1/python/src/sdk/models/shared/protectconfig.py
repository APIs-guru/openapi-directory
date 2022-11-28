from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ProtectConfigWorkloadVulnerabilityModeEnum(str, Enum):
    WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED = "WORKLOAD_VULNERABILITY_MODE_UNSPECIFIED"
    DISABLED = "DISABLED"
    BASIC = "BASIC"


@dataclass_json
@dataclass
class ProtectConfig:
    r"""ProtectConfig
    ProtectConfig defines the flags needed to enable/disable features for the Protect API.
    """
    
    workload_config: Optional[WorkloadConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadConfig') }})
    workload_vulnerability_mode: Optional[ProtectConfigWorkloadVulnerabilityModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workloadVulnerabilityMode') }})
    

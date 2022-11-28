from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WorkloadConfigAuditModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    DISABLED = "DISABLED"
    BASIC = "BASIC"
    BASELINE = "BASELINE"
    RESTRICTED = "RESTRICTED"


@dataclass_json
@dataclass
class WorkloadConfig:
    r"""WorkloadConfig
    WorkloadConfig defines the flags to enable or disable the workload configurations for the cluster.
    """
    
    audit_mode: Optional[WorkloadConfigAuditModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('auditMode') }})
    

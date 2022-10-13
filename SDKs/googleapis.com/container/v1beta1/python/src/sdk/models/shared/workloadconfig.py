from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class WorkloadConfigAuditModeEnum(str, Enum):
    MODE_UNSPECIFIED = "MODE_UNSPECIFIED"
    DISABLED = "DISABLED"
    BASIC = "BASIC"
    BASELINE = "BASELINE"
    RESTRICTED = "RESTRICTED"


@dataclass_json
@dataclass
class WorkloadConfig:
    audit_mode: Optional[WorkloadConfigAuditModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditMode' }})
    

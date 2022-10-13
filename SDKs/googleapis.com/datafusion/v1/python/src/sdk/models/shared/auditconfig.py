from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import auditlogconfig


@dataclass_json
@dataclass
class AuditConfig:
    audit_log_configs: Optional[List[auditlogconfig.AuditLogConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditLogConfigs' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    

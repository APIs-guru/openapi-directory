from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleiamv1auditlogconfig


@dataclass_json
@dataclass
class GoogleIamV1AuditConfig:
    audit_log_configs: Optional[List[googleiamv1auditlogconfig.GoogleIamV1AuditLogConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditLogConfigs' }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    

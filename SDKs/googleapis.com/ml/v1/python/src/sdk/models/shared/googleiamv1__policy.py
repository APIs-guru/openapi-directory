from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleiamv1__auditconfig
from . import googleiamv1__binding


@dataclass_json
@dataclass
class GoogleIamV1Policy:
    audit_configs: Optional[List[googleiamv1__auditconfig.GoogleIamV1AuditConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditConfigs' }})
    bindings: Optional[List[googleiamv1__binding.GoogleIamV1Binding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindings' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import auditconfig
from . import binding


@dataclass_json
@dataclass
class Policy:
    audit_configs: Optional[List[auditconfig.AuditConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auditConfigs' }})
    bindings: Optional[List[binding.Binding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bindings' }})
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    

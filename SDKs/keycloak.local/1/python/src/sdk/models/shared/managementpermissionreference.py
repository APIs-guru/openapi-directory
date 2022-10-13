from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ManagementPermissionReference:
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enabled' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    scope_permissions: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopePermissions' }})
    

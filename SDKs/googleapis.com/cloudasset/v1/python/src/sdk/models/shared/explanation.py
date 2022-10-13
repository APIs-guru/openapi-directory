from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import permissions


@dataclass_json
@dataclass
class Explanation:
    matched_permissions: Optional[dict[str, permissions.Permissions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchedPermissions' }})
    

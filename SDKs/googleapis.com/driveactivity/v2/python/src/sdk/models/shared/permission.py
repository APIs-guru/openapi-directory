from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import domain
from . import group
from . import user

class PermissionRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    OWNER = "OWNER"
    ORGANIZER = "ORGANIZER"
    FILE_ORGANIZER = "FILE_ORGANIZER"
    EDITOR = "EDITOR"
    COMMENTER = "COMMENTER"
    VIEWER = "VIEWER"
    PUBLISHED_VIEWER = "PUBLISHED_VIEWER"


@dataclass_json
@dataclass
class Permission:
    allow_discovery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowDiscovery' }})
    anyone: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'anyone' }})
    domain: Optional[domain.Domain] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    group: Optional[group.Group] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    role: Optional[PermissionRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    

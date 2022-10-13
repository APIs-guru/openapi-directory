from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AdminRoleEnum(str, Enum):
    ADMIN_ROLE_UNSPECIFIED = "ADMIN_ROLE_UNSPECIFIED"
    PRIMARY_OWNER = "PRIMARY_OWNER"
    OWNER = "OWNER"
    MANAGER = "MANAGER"
    SITE_MANAGER = "SITE_MANAGER"


@dataclass_json
@dataclass
class Admin:
    account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    admin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pending_invitation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pendingInvitation' }})
    role: Optional[AdminRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

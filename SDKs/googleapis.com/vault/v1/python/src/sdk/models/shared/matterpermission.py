from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MatterPermissionRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    COLLABORATOR = "COLLABORATOR"
    OWNER = "OWNER"


@dataclass_json
@dataclass
class MatterPermission:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    role: Optional[MatterPermissionRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    

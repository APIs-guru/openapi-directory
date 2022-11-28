from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MatterPermissionRoleEnum(str, Enum):
    ROLE_UNSPECIFIED = "ROLE_UNSPECIFIED"
    COLLABORATOR = "COLLABORATOR"
    OWNER = "OWNER"


@dataclass_json
@dataclass
class MatterPermission:
    r"""MatterPermission
    Users can be matter owners or collaborators. Each matter has only one owner. All others users who can access the matter are collaborators. When an account is purged, its corresponding MatterPermission resources cease to exist.
    """
    
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    role: Optional[MatterPermissionRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    

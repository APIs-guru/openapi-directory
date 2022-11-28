from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Permission
    The permission setting of an object.
    """
    
    allow_discovery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowDiscovery') }})
    anyone: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('anyone') }})
    domain: Optional[Domain] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domain') }})
    group: Optional[Group] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    role: Optional[PermissionRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateRoleRequest:
    r"""CreateRoleRequest
    The request to create a new role.
    """
    
    role: Optional[Role] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('role') }})
    role_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleId') }})
    

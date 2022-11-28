from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserAccess:
    r"""UserAccess
    Represents a user's permissions to an account and its container.
    """
    
    account_access: Optional[AccountAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountAccess') }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountId') }})
    container_access: Optional[List[ContainerAccess]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('containerAccess') }})
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddress') }})
    permission_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionId') }})
    

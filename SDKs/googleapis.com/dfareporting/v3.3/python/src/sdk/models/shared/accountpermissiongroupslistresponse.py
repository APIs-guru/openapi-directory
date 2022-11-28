from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountPermissionGroupsListResponse:
    r"""AccountPermissionGroupsListResponse
    Account Permission Group List Response
    """
    
    account_permission_groups: Optional[List[AccountPermissionGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountPermissionGroups') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    

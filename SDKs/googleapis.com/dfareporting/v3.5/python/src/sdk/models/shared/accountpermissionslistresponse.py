from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountPermissionsListResponse:
    r"""AccountPermissionsListResponse
    Account Permission List Response
    """
    
    account_permissions: Optional[List[AccountPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountPermissions') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    

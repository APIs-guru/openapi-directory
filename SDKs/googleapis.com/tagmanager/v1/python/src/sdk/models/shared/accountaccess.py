from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountAccessPermissionEnum(str, Enum):
    READ = "read"
    EDIT = "edit"
    PUBLISH = "publish"
    DELETE = "delete"
    MANAGE = "manage"
    EDIT_WORKSPACE = "editWorkspace"


@dataclass_json
@dataclass
class AccountAccess:
    r"""AccountAccess
    Defines the Google Tag Manager Account access permissions.
    """
    
    permission: Optional[List[AccountAccessPermissionEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

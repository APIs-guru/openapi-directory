from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AccountAccessPermissionEnum(str, Enum):
    ACCOUNT_PERMISSION_UNSPECIFIED = "accountPermissionUnspecified"
    NO_ACCESS = "noAccess"
    USER = "user"
    ADMIN = "admin"


@dataclass_json
@dataclass
class AccountAccess:
    r"""AccountAccess
    Defines the Google Tag Manager Account access permissions.
    """
    
    permission: Optional[AccountAccessPermissionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    

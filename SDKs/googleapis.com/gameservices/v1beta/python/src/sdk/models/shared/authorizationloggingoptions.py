from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AuthorizationLoggingOptionsPermissionTypeEnum(str, Enum):
    PERMISSION_TYPE_UNSPECIFIED = "PERMISSION_TYPE_UNSPECIFIED"
    ADMIN_READ = "ADMIN_READ"
    ADMIN_WRITE = "ADMIN_WRITE"
    DATA_READ = "DATA_READ"
    DATA_WRITE = "DATA_WRITE"


@dataclass_json
@dataclass
class AuthorizationLoggingOptions:
    r"""AuthorizationLoggingOptions
    Authorization-related information used by Cloud Audit Logging.
    """
    
    permission_type: Optional[AuthorizationLoggingOptionsPermissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissionType') }})
    

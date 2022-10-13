from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class AuthorizationLoggingOptionsPermissionTypeEnum(str, Enum):
    PERMISSION_TYPE_UNSPECIFIED = "PERMISSION_TYPE_UNSPECIFIED"
    ADMIN_READ = "ADMIN_READ"
    ADMIN_WRITE = "ADMIN_WRITE"
    DATA_READ = "DATA_READ"
    DATA_WRITE = "DATA_WRITE"


@dataclass_json
@dataclass
class AuthorizationLoggingOptions:
    permission_type: Optional[AuthorizationLoggingOptionsPermissionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissionType' }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authorizationloggingoptions

class CloudAuditOptionsLogNameEnum(str, Enum):
    UNSPECIFIED_LOG_NAME = "UNSPECIFIED_LOG_NAME"
    ADMIN_ACTIVITY = "ADMIN_ACTIVITY"
    DATA_ACCESS = "DATA_ACCESS"


@dataclass_json
@dataclass
class CloudAuditOptions:
    authorization_logging_options: Optional[authorizationloggingoptions.AuthorizationLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationLoggingOptions' }})
    log_name: Optional[CloudAuditOptionsLogNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logName' }})
    

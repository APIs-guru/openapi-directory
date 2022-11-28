from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CloudAuditOptionsLogNameEnum(str, Enum):
    UNSPECIFIED_LOG_NAME = "UNSPECIFIED_LOG_NAME"
    ADMIN_ACTIVITY = "ADMIN_ACTIVITY"
    DATA_ACCESS = "DATA_ACCESS"


@dataclass_json
@dataclass
class CloudAuditOptions:
    r"""CloudAuditOptions
    Write a Cloud Audit log
    """
    
    authorization_logging_options: Optional[AuthorizationLoggingOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationLoggingOptions') }})
    log_name: Optional[CloudAuditOptionsLogNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('logName') }})
    

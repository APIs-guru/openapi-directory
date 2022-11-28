from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudIdentitytoolkitAdminV2MonitoringConfig:
    r"""GoogleCloudIdentitytoolkitAdminV2MonitoringConfig
    Configuration related to monitoring project activity.
    """
    
    request_logging: Optional[GoogleCloudIdentitytoolkitAdminV2RequestLogging] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestLogging') }})
    

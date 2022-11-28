from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FailoverInstanceRequestDataProtectionModeEnum(str, Enum):
    DATA_PROTECTION_MODE_UNSPECIFIED = "DATA_PROTECTION_MODE_UNSPECIFIED"
    LIMITED_DATA_LOSS = "LIMITED_DATA_LOSS"
    FORCE_DATA_LOSS = "FORCE_DATA_LOSS"


@dataclass_json
@dataclass
class FailoverInstanceRequest:
    r"""FailoverInstanceRequest
    Request for Failover.
    """
    
    data_protection_mode: Optional[FailoverInstanceRequestDataProtectionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataProtectionMode') }})
    

from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FailoverInstanceRequestDataProtectionModeEnum(str, Enum):
    DATA_PROTECTION_MODE_UNSPECIFIED = "DATA_PROTECTION_MODE_UNSPECIFIED"
    LIMITED_DATA_LOSS = "LIMITED_DATA_LOSS"
    FORCE_DATA_LOSS = "FORCE_DATA_LOSS"


@dataclass_json
@dataclass
class FailoverInstanceRequest:
    data_protection_mode: Optional[FailoverInstanceRequestDataProtectionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataProtectionMode' }})
    

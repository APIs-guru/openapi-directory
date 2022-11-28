from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GenerateRandomBytesRequestProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class GenerateRandomBytesRequest:
    r"""GenerateRandomBytesRequest
    Request message for KeyManagementService.GenerateRandomBytes.
    """
    
    length_bytes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lengthBytes') }})
    protection_level: Optional[GenerateRandomBytesRequestProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectionLevel') }})
    

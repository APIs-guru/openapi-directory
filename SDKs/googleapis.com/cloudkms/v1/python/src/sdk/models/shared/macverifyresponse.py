from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MacVerifyResponseProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class MacVerifyResponse:
    r"""MacVerifyResponse
    Response message for KeyManagementService.MacVerify.
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection_level: Optional[MacVerifyResponseProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectionLevel') }})
    success: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('success') }})
    verified_data_crc32c: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedDataCrc32c') }})
    verified_mac_crc32c: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedMacCrc32c') }})
    verified_success_integrity: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedSuccessIntegrity') }})
    

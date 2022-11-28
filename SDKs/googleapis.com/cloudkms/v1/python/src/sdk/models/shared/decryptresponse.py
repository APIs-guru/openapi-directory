from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DecryptResponseProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class DecryptResponse:
    r"""DecryptResponse
    Response message for KeyManagementService.Decrypt.
    """
    
    plaintext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plaintext') }})
    plaintext_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plaintextCrc32c') }})
    protection_level: Optional[DecryptResponseProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectionLevel') }})
    used_primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('usedPrimary') }})
    

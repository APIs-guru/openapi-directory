from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EncryptResponseProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class EncryptResponse:
    r"""EncryptResponse
    Response message for KeyManagementService.Encrypt.
    """
    
    ciphertext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciphertext') }})
    ciphertext_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciphertextCrc32c') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    protection_level: Optional[EncryptResponseProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectionLevel') }})
    verified_additional_authenticated_data_crc32c: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedAdditionalAuthenticatedDataCrc32c') }})
    verified_plaintext_crc32c: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedPlaintextCrc32c') }})
    

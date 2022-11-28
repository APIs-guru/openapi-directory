from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class AsymmetricDecryptResponseProtectionLevelEnum(str, Enum):
    PROTECTION_LEVEL_UNSPECIFIED = "PROTECTION_LEVEL_UNSPECIFIED"
    SOFTWARE = "SOFTWARE"
    HSM = "HSM"
    EXTERNAL = "EXTERNAL"
    EXTERNAL_VPC = "EXTERNAL_VPC"


@dataclass_json
@dataclass
class AsymmetricDecryptResponse:
    r"""AsymmetricDecryptResponse
    Response message for KeyManagementService.AsymmetricDecrypt.
    """
    
    plaintext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plaintext') }})
    plaintext_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plaintextCrc32c') }})
    protection_level: Optional[AsymmetricDecryptResponseProtectionLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('protectionLevel') }})
    verified_ciphertext_crc32c: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('verifiedCiphertextCrc32c') }})
    

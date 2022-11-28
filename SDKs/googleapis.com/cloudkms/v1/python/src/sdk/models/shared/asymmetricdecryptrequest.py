from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AsymmetricDecryptRequest:
    r"""AsymmetricDecryptRequest
    Request message for KeyManagementService.AsymmetricDecrypt.
    """
    
    ciphertext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciphertext') }})
    ciphertext_crc32c: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ciphertextCrc32c') }})
    

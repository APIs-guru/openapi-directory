from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GooglePrivacyDlpV2KmsWrappedCryptoKey:
    r"""GooglePrivacyDlpV2KmsWrappedCryptoKey
    Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. Authorization requires the following IAM permissions when sending a request to perform a crypto transformation using a KMS-wrapped crypto key: dlp.kms.encrypt For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key). Note: When you use Cloud KMS for cryptographic operations, [charges apply](https://cloud.google.com/kms/pricing).
    """
    
    crypto_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKeyName') }})
    wrapped_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wrappedKey') }})
    

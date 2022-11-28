from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KmsWrappedCryptoKey:
    r"""KmsWrappedCryptoKey
    Include to use an existing data crypto key wrapped by KMS. The wrapped key must be a 128-, 192-, or 256-bit key. The key must grant the Cloud IAM permission `cloudkms.cryptoKeyVersions.useToDecrypt` to the project's Cloud Healthcare Service Agent service account. For more information, see [Creating a wrapped key] (https://cloud.google.com/dlp/docs/create-wrapped-key).
    """
    
    crypto_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cryptoKey') }})
    wrapped_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('wrappedKey') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EncryptionKey:
    r"""EncryptionKey
    Defined a customer managed encryption key that will be used to encrypt Backup artifacts.
    """
    
    gcp_kms_encryption_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gcpKmsEncryptionKey') }})
    

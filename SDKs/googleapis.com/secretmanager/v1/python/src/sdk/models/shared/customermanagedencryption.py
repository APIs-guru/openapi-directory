from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CustomerManagedEncryption:
    r"""CustomerManagedEncryption
    Configuration for encrypting secret payloads using customer-managed encryption keys (CMEK).
    """
    
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    

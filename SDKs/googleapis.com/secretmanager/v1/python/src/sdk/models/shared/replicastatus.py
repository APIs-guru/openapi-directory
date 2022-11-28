from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReplicaStatus:
    r"""ReplicaStatus
    Describes the status of a user-managed replica for the SecretVersion.
    """
    
    customer_managed_encryption: Optional[CustomerManagedEncryptionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedEncryption') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    

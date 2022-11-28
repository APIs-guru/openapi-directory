from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AutomaticStatus:
    r"""AutomaticStatus
    The replication status of a SecretVersion using automatic replication. Only populated if the parent Secret has an automatic replication policy.
    """
    
    customer_managed_encryption: Optional[CustomerManagedEncryptionStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedEncryption') }})
    

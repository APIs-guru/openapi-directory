from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Automatic:
    r"""Automatic
    A replication policy that replicates the Secret payload without any restrictions.
    """
    
    customer_managed_encryption: Optional[CustomerManagedEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedEncryption') }})
    

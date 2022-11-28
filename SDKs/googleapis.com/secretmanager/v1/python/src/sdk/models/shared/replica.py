from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Replica:
    r"""Replica
    Represents a Replica for this Secret.
    """
    
    customer_managed_encryption: Optional[CustomerManagedEncryption] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerManagedEncryption') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    

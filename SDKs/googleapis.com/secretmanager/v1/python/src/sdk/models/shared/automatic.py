from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customermanagedencryption


@dataclass_json
@dataclass
class Automatic:
    customer_managed_encryption: Optional[customermanagedencryption.CustomerManagedEncryption] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedEncryption' }})
    

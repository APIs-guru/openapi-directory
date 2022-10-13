from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import customermanagedencryptionstatus


@dataclass_json
@dataclass
class AutomaticStatus:
    customer_managed_encryption: Optional[customermanagedencryptionstatus.CustomerManagedEncryptionStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerManagedEncryption' }})
    

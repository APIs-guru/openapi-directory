from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BillingAccount:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    master_billing_account: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'masterBillingAccount' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    open: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'open' }})
    

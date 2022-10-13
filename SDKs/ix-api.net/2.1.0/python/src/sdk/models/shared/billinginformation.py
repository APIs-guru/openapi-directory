from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import address


@dataclass_json
@dataclass
class BillingInformation:
    address: address.Address = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    vat_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vat_number' }})
    

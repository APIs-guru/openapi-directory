from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import returnaddressaddress


@dataclass_json
@dataclass
class ReturnAddress:
    address: Optional[returnaddressaddress.ReturnAddressAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    return_address_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnAddressId' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AddressInputModel:
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine1' }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine2' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    

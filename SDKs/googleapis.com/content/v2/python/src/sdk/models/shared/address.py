from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Address:
    administrative_area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'administrativeArea' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    street_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streetAddress' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PostalAddress6Ch:
    address_line1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine1' }})
    address_line2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addressLine2' }})
    building_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'buildingNumber' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postCode' }})
    street_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streetName' }})
    town_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'townName' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Address:
    country: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    locality: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locality' }})
    post_office_box_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'post_office_box_number' }})
    postal_code: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postal_code' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    street_address: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'street_address' }})
    

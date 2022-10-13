from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestOrderAddress:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    full_address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fullAddress' }})
    is_post_office_box: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isPostOfficeBox' }})
    locality: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locality' }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postalCode' }})
    recipient_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recipientName' }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'region' }})
    street_address: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'streetAddress' }})
    

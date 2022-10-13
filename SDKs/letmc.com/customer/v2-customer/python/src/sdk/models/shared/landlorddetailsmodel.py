from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LandlordDetailsModel:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Address' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Email' }})
    global_reference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GlobalReference' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ID' }})
    mobile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Mobile' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Phone' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BillAgent:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    phone_no: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNo' }})
    website: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'website' }})
    

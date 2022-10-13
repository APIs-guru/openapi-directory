from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderaddress


@dataclass_json
@dataclass
class OrderDeliveryDetails:
    address: Optional[orderaddress.OrderAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    

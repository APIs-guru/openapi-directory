from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import testorderaddress


@dataclass_json
@dataclass
class TestOrderDeliveryDetails:
    address: Optional[testorderaddress.TestOrderAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    is_scheduled_delivery: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isScheduledDelivery' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    

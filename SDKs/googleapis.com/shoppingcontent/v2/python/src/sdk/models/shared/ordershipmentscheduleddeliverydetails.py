from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrderShipmentScheduledDeliveryDetails:
    carrier_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrierPhoneNumber' }})
    scheduled_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledDate' }})
    

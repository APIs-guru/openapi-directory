from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderaddress
from . import orderpickupdetailscollector


@dataclass_json
@dataclass
class OrderPickupDetails:
    address: Optional[orderaddress.OrderAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    collectors: Optional[List[orderpickupdetailscollector.OrderPickupDetailsCollector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collectors' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    pickup_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupType' }})
    

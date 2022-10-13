from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testorderaddress
from . import testorderpickupdetailspickupperson


@dataclass_json
@dataclass
class TestOrderPickupDetails:
    location_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationCode' }})
    pickup_location_address: Optional[testorderaddress.TestOrderAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupLocationAddress' }})
    pickup_location_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupLocationType' }})
    pickup_persons: Optional[List[testorderpickupdetailspickupperson.TestOrderPickupDetailsPickupPerson]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupPersons' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestOrderPickupDetails:
    location_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationCode') }})
    pickup_location_address: Optional[TestOrderAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupLocationAddress') }})
    pickup_location_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupLocationType') }})
    pickup_persons: Optional[List[TestOrderPickupDetailsPickupPerson]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupPersons') }})
    

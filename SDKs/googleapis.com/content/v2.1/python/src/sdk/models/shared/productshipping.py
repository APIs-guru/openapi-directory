from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ProductShipping:
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    location_group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationGroupName') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationId') }})
    max_handling_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxHandlingTime') }})
    max_transit_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTransitTime') }})
    min_handling_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minHandlingTime') }})
    min_transit_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minTransitTime') }})
    postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalCode') }})
    price: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('region') }})
    service: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('service') }})
    

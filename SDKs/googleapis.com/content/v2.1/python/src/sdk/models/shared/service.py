from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Service:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currency') }})
    delivery_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryCountry') }})
    delivery_time: Optional[DeliveryTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryTime') }})
    eligibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eligibility') }})
    minimum_order_value: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumOrderValue') }})
    minimum_order_value_table: Optional[MinimumOrderValueTable] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumOrderValueTable') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    pickup_service: Optional[PickupCarrierService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupService') }})
    rate_groups: Optional[List[RateGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateGroups') }})
    shipment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentType') }})
    

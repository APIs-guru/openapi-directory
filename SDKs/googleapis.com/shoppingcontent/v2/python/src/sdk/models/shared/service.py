from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deliverytime
from . import price
from . import minimumordervaluetable
from . import pickupcarrierservice
from . import rategroup


@dataclass_json
@dataclass
class Service:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    delivery_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryCountry' }})
    delivery_time: Optional[deliverytime.DeliveryTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryTime' }})
    eligibility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eligibility' }})
    minimum_order_value: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumOrderValue' }})
    minimum_order_value_table: Optional[minimumordervaluetable.MinimumOrderValueTable] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumOrderValueTable' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pickup_service: Optional[pickupcarrierservice.PickupCarrierService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupService' }})
    rate_groups: Optional[List[rategroup.RateGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateGroups' }})
    shipment_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentType' }})
    

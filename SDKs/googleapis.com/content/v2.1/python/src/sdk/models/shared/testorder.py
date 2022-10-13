from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testorderdeliverydetails
from . import testorderlineitem
from . import testorderpickupdetails
from . import orderpromotion
from . import price


@dataclass_json
@dataclass
class TestOrder:
    delivery_details: Optional[testorderdeliverydetails.TestOrderDeliveryDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryDetails' }})
    enable_orderinvoices: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableOrderinvoices' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    line_items: Optional[List[testorderlineitem.TestOrderLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    notification_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationMode' }})
    pickup_details: Optional[testorderpickupdetails.TestOrderPickupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupDetails' }})
    predefined_billing_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predefinedBillingAddress' }})
    predefined_delivery_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predefinedDeliveryAddress' }})
    predefined_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predefinedEmail' }})
    predefined_pickup_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predefinedPickupDetails' }})
    promotions: Optional[List[orderpromotion.OrderPromotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotions' }})
    shipping_cost: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCost' }})
    shipping_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingOption' }})
    

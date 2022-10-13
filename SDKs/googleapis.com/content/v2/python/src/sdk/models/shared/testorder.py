from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import testordercustomer
from . import testorderlineitem
from . import testorderpaymentmethod
from . import orderlegacypromotion
from . import price
from . import price


@dataclass_json
@dataclass
class TestOrder:
    customer: Optional[testordercustomer.TestOrderCustomer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    enable_orderinvoices: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enableOrderinvoices' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    line_items: Optional[List[testorderlineitem.TestOrderLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    notification_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationMode' }})
    payment_method: Optional[testorderpaymentmethod.TestOrderPaymentMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMethod' }})
    predefined_delivery_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predefinedDeliveryAddress' }})
    predefined_pickup_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'predefinedPickupDetails' }})
    promotions: Optional[List[orderlegacypromotion.OrderLegacyPromotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotions' }})
    shipping_cost: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCost' }})
    shipping_cost_tax: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCostTax' }})
    shipping_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingOption' }})
    

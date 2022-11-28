from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestOrder:
    customer: Optional[TestOrderCustomer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    enable_orderinvoices: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableOrderinvoices') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    line_items: Optional[List[TestOrderLineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    notification_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationMode') }})
    payment_method: Optional[TestOrderPaymentMethod] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMethod') }})
    predefined_delivery_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedDeliveryAddress') }})
    predefined_pickup_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedPickupDetails') }})
    promotions: Optional[List[OrderLegacyPromotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    shipping_cost: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCost') }})
    shipping_cost_tax: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCostTax') }})
    shipping_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingOption') }})
    

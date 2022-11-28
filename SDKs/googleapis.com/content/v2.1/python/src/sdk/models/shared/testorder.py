from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TestOrder:
    delivery_details: Optional[TestOrderDeliveryDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryDetails') }})
    enable_orderinvoices: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('enableOrderinvoices') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    line_items: Optional[List[TestOrderLineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    notification_mode: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationMode') }})
    pickup_details: Optional[TestOrderPickupDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupDetails') }})
    predefined_billing_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedBillingAddress') }})
    predefined_delivery_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedDeliveryAddress') }})
    predefined_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedEmail') }})
    predefined_pickup_details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('predefinedPickupDetails') }})
    promotions: Optional[List[OrderPromotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    shipping_cost: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCost') }})
    shipping_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingOption') }})
    

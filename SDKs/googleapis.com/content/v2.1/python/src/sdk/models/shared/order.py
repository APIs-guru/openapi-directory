from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Order:
    r"""Order
    Order. Production access (all methods) requires the order manager role. Sandbox access does not.
    """
    
    acknowledged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('acknowledged') }})
    annotations: Optional[List[OrderOrderAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('annotations') }})
    billing_address: Optional[OrderAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingAddress') }})
    customer: Optional[OrderCustomer] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customer') }})
    delivery_details: Optional[OrderDeliveryDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryDetails') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    line_items: Optional[List[OrderLineItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantOrderId') }})
    net_price_amount: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netPriceAmount') }})
    net_tax_amount: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('netTaxAmount') }})
    payment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentStatus') }})
    pickup_details: Optional[OrderPickupDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pickupDetails') }})
    placed_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('placedDate') }})
    promotions: Optional[List[OrderPromotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('promotions') }})
    refunds: Optional[List[OrderRefund]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('refunds') }})
    shipments: Optional[List[OrderShipment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipments') }})
    shipping_cost: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCost') }})
    shipping_cost_tax: Optional[Price] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingCostTax') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tax_collector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxCollector') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ordercustomer
from . import orderdeliverydetails
from . import orderlineitem
from . import price
from . import orderpaymentmethod
from . import orderpickupdetails
from . import orderlegacypromotion
from . import orderrefund
from . import ordershipment
from . import price
from . import price


@dataclass_json
@dataclass
class Order:
    acknowledged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledged' }})
    channel_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelType' }})
    customer: Optional[ordercustomer.OrderCustomer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    delivery_details: Optional[orderdeliverydetails.OrderDeliveryDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryDetails' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    line_items: Optional[List[orderlineitem.OrderLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    net_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netAmount' }})
    payment_method: Optional[orderpaymentmethod.OrderPaymentMethod] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentMethod' }})
    payment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentStatus' }})
    pickup_details: Optional[orderpickupdetails.OrderPickupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupDetails' }})
    placed_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placedDate' }})
    promotions: Optional[List[orderlegacypromotion.OrderLegacyPromotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotions' }})
    refunds: Optional[List[orderrefund.OrderRefund]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunds' }})
    shipments: Optional[List[ordershipment.OrderShipment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipments' }})
    shipping_cost: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCost' }})
    shipping_cost_tax: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCostTax' }})
    shipping_option: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingOption' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tax_collector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCollector' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orderorderannotation
from . import orderaddress
from . import ordercustomer
from . import orderdeliverydetails
from . import orderlineitem
from . import price
from . import price
from . import orderpickupdetails
from . import orderpromotion
from . import orderrefund
from . import ordershipment
from . import price
from . import price


@dataclass_json
@dataclass
class Order:
    acknowledged: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledged' }})
    annotations: Optional[List[orderorderannotation.OrderOrderAnnotation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'annotations' }})
    billing_address: Optional[orderaddress.OrderAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingAddress' }})
    customer: Optional[ordercustomer.OrderCustomer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customer' }})
    delivery_details: Optional[orderdeliverydetails.OrderDeliveryDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryDetails' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    line_items: Optional[List[orderlineitem.OrderLineItem]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    merchant_order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantOrderId' }})
    net_price_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netPriceAmount' }})
    net_tax_amount: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'netTaxAmount' }})
    payment_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paymentStatus' }})
    pickup_details: Optional[orderpickupdetails.OrderPickupDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pickupDetails' }})
    placed_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placedDate' }})
    promotions: Optional[List[orderpromotion.OrderPromotion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'promotions' }})
    refunds: Optional[List[orderrefund.OrderRefund]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'refunds' }})
    shipments: Optional[List[ordershipment.OrderShipment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipments' }})
    shipping_cost: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCost' }})
    shipping_cost_tax: Optional[price.Price] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingCostTax' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tax_collector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxCollector' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrderTrackingSignalInput:
    r"""OrderTrackingSignalInput
    Represents a merchant trade from which signals are extracted, e.g. shipping.
    """
    
    customer_shipping_fee: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerShippingFee') }})
    delivery_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryPostalCode') }})
    delivery_region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryRegionCode') }})
    line_items: Optional[List[OrderTrackingSignalLineItemDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    order_created_time: Optional[DateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderCreatedTime') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    shipment_line_item_mapping: Optional[List[OrderTrackingSignalShipmentLineItemMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentLineItemMapping') }})
    shipping_info: Optional[List[OrderTrackingSignalShippingInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingInfo') }})
    

@dataclass_json
@dataclass
class OrderTrackingSignal:
    r"""OrderTrackingSignal
    Represents a merchant trade from which signals are extracted, e.g. shipping.
    """
    
    customer_shipping_fee: Optional[PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerShippingFee') }})
    delivery_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryPostalCode') }})
    delivery_region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryRegionCode') }})
    line_items: Optional[List[OrderTrackingSignalLineItemDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineItems') }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('merchantId') }})
    order_created_time: Optional[DateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderCreatedTime') }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderId') }})
    order_tracking_signal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderTrackingSignalId') }})
    shipment_line_item_mapping: Optional[List[OrderTrackingSignalShipmentLineItemMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentLineItemMapping') }})
    shipping_info: Optional[List[OrderTrackingSignalShippingInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingInfo') }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import priceamount
from . import ordertrackingsignallineitemdetails
from . import datetime
from . import ordertrackingsignalshipmentlineitemmapping
from . import ordertrackingsignalshippinginfo


@dataclass_json
@dataclass
class OrderTrackingSignal:
    customer_shipping_fee: Optional[priceamount.PriceAmount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerShippingFee' }})
    delivery_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryPostalCode' }})
    delivery_region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryRegionCode' }})
    line_items: Optional[List[ordertrackingsignallineitemdetails.OrderTrackingSignalLineItemDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    order_created_time: Optional[datetime.DateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderCreatedTime' }})
    order_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderId' }})
    order_tracking_signal_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderTrackingSignalId' }})
    shipment_line_item_mapping: Optional[List[ordertrackingsignalshipmentlineitemmapping.OrderTrackingSignalShipmentLineItemMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentLineItemMapping' }})
    shipping_info: Optional[List[ordertrackingsignalshippinginfo.OrderTrackingSignalShippingInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingInfo' }})
    

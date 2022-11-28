from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OrderTrackingSignalShippingInfoShippingStatusEnum(str, Enum):
    SHIPPING_STATE_UNSPECIFIED = "SHIPPING_STATE_UNSPECIFIED"
    SHIPPED = "SHIPPED"
    DELIVERED = "DELIVERED"


@dataclass_json
@dataclass
class OrderTrackingSignalShippingInfo:
    r"""OrderTrackingSignalShippingInfo
    The shipping information for the order.
    """
    
    actual_delivery_time: Optional[DateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actualDeliveryTime') }})
    carrier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierName') }})
    carrier_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrierServiceName') }})
    earliest_delivery_promise_time: Optional[DateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('earliestDeliveryPromiseTime') }})
    latest_delivery_promise_time: Optional[DateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestDeliveryPromiseTime') }})
    origin_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originPostalCode') }})
    origin_region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originRegionCode') }})
    shipment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentId') }})
    shipped_time: Optional[DateTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippedTime') }})
    shipping_status: Optional[OrderTrackingSignalShippingInfoShippingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingStatus') }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    

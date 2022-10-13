from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import datetime
from . import datetime
from . import datetime
from . import datetime

class OrderTrackingSignalShippingInfoShippingStatusEnum(str, Enum):
    SHIPPING_STATE_UNSPECIFIED = "SHIPPING_STATE_UNSPECIFIED"
    SHIPPED = "SHIPPED"
    DELIVERED = "DELIVERED"


@dataclass_json
@dataclass
class OrderTrackingSignalShippingInfo:
    actual_delivery_time: Optional[datetime.DateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actualDeliveryTime' }})
    carrier_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrierName' }})
    carrier_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrierServiceName' }})
    earliest_delivery_promise_time: Optional[datetime.DateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'earliestDeliveryPromiseTime' }})
    latest_delivery_promise_time: Optional[datetime.DateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latestDeliveryPromiseTime' }})
    origin_postal_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originPostalCode' }})
    origin_region_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originRegionCode' }})
    shipment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentId' }})
    shipped_time: Optional[datetime.DateTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippedTime' }})
    shipping_status: Optional[OrderTrackingSignalShippingInfoShippingStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shippingStatus' }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingId' }})
    

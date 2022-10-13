from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OrdersCustomBatchRequestEntryShipLineItemsShipmentInfo:
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    shipment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentId' }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingId' }})
    

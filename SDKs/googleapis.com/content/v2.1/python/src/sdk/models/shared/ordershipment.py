from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ordershipmentlineitemshipment
from . import ordershipmentscheduleddeliverydetails


@dataclass_json
@dataclass
class OrderShipment:
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate' }})
    delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryDate' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    line_items: Optional[List[ordershipmentlineitemshipment.OrderShipmentLineItemShipment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineItems' }})
    scheduled_delivery_details: Optional[ordershipmentscheduleddeliverydetails.OrderShipmentScheduledDeliveryDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledDeliveryDetails' }})
    shipment_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentGroupId' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingId' }})
    

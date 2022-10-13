from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orderscustombatchrequestentryupdateshipmentscheduleddeliverydetails


@dataclass_json
@dataclass
class OrdersUpdateShipmentRequest:
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'carrier' }})
    delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryDate' }})
    last_pickup_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastPickupDate' }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operationId' }})
    ready_pickup_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readyPickupDate' }})
    scheduled_delivery_details: Optional[orderscustombatchrequestentryupdateshipmentscheduleddeliverydetails.OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduledDeliveryDetails' }})
    shipment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shipmentId' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trackingId' }})
    undelivered_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'undeliveredDate' }})
    

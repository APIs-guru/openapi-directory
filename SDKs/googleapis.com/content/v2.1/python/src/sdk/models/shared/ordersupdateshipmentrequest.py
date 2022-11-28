from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrdersUpdateShipmentRequest:
    carrier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('carrier') }})
    delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryDate') }})
    last_pickup_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastPickupDate') }})
    operation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('operationId') }})
    ready_pickup_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('readyPickupDate') }})
    scheduled_delivery_details: Optional[OrdersCustomBatchRequestEntryUpdateShipmentScheduledDeliveryDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduledDeliveryDetails') }})
    shipment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentId') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    tracking_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trackingId') }})
    undelivered_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('undeliveredDate') }})
    

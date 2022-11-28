from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReturnShipment:
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate') }})
    delivery_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryDate') }})
    return_method_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnMethodType') }})
    shipment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentId') }})
    shipment_tracking_infos: Optional[List[ShipmentTrackingInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shipmentTrackingInfos') }})
    shipping_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shippingDate') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ActivityTypeEnum(str, Enum):
    START = "start"
    END = "end"
    SERVICE = "service"
    PICKUP_SHIPMENT = "pickupShipment"
    DELIVER_SHIPMENT = "deliverShipment"
    PICKUP = "pickup"
    DELIVERY = "delivery"
    BREAK = "break"


@dataclass_json
@dataclass
class Activity:
    address: Optional[ResponseAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    arr_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arr_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    arr_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('arr_time') }})
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('distance') }})
    driving_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driving_time') }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date_time'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    end_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    load_after: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_after') }})
    load_before: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('load_before') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    preparation_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preparation_time') }})
    type: Optional[ActivityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    waiting_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_time') }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScheduleViewModel:
    bookings_per_slot: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingsPerSlot' }})
    deleted_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedStatus' }})
    deleted_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deletedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interval: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    object_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectName' }})
    primary: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primary' }})
    resource_group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceGroupId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

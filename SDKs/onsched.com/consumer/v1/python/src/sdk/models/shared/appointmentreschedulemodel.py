from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AppointmentRescheduleModel:
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceId' }})
    service_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceId' }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    travel_appointment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelAppointmentId' }})
    travel_time_mins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelTimeMins' }})
    

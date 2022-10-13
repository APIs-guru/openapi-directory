from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResourceOptionsUpdateModel:
    bio_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bioLink' }})
    booking_notification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bookingNotification' }})
    calendar_availability: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calendarAvailability' }})
    display_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayColor' }})
    effective_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    google_calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleCalendarId' }})
    hourly: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hourly' }})
    ignore_business_hours: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignoreBusinessHours' }})
    notification_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationType' }})
    outlook_calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outlookCalendarId' }})
    sort_key: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortKey' }})
    

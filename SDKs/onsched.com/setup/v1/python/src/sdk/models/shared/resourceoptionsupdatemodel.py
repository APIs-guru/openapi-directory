from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResourceOptionsUpdateModel:
    bio_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bioLink') }})
    booking_notification: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bookingNotification') }})
    calendar_availability: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calendarAvailability') }})
    display_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayColor') }})
    effective_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    gender: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    google_calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleCalendarId') }})
    hourly: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hourly') }})
    ignore_business_hours: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignoreBusinessHours') }})
    notification_type: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationType') }})
    outlook_calendar_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outlookCalendarId') }})
    sort_key: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortKey') }})
    

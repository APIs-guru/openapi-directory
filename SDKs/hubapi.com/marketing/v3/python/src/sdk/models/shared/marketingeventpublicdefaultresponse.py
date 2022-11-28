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
class MarketingEventPublicDefaultResponse:
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventName') }})
    event_organizer: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventOrganizer') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    updated_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_properties: Optional[List[PropertyValue]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customProperties') }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_cancelled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventCancelled') }})
    event_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventDescription') }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    event_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventUrl') }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import propertyvalue


@dataclass_json
@dataclass
class MarketingEventPublicReadResponse:
    attendees: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attendees' }})
    cancellations: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cancellations' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    custom_properties: Optional[List[propertyvalue.PropertyValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customProperties' }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_cancelled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventCancelled' }})
    event_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDescription' }})
    event_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    event_organizer: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventOrganizer' }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    event_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventUrl' }})
    external_event_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externalEventId' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    no_shows: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'noShows' }})
    registrants: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrants' }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

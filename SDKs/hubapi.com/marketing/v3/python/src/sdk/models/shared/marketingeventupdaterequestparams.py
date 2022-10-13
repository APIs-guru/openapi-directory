from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import propertyvalue


@dataclass_json
@dataclass
class MarketingEventUpdateRequestParams:
    custom_properties: Optional[List[propertyvalue.PropertyValue]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customProperties' }})
    end_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    event_cancelled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventCancelled' }})
    event_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventDescription' }})
    event_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventName' }})
    event_organizer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventOrganizer' }})
    event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    event_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventUrl' }})
    start_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import subscriptioncategory_enum
from . import hiusubscriptioneventcontent


@dataclass_json
@dataclass
class HiuSubscriptionNotificationEvent:
    category: subscriptioncategory_enum.SubscriptionCategoryEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    content: hiusubscriptioneventcontent.HiuSubscriptionEventContent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    published: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'published', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subscription_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionId' }})
    

@dataclass_json
@dataclass
class HiuSubscriptionNotification:
    event: HiuSubscriptionNotificationEvent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HiuSubscriptionNotificationEvent:
    category: SubscriptionCategoryEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    content: HiuSubscriptionEventContent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    published: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('published'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subscription_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionId') }})
    

@dataclass_json
@dataclass
class HiuSubscriptionNotification:
    event: HiuSubscriptionNotificationEvent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

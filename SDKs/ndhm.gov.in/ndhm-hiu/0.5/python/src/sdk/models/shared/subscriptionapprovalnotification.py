from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubscriptionApprovalNotificationNotification:
    status: SubscriptionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    subscription: Optional[HiuSubscription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    subscription_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionRequestId') }})
    

@dataclass_json
@dataclass
class SubscriptionApprovalNotification:
    notification: SubscriptionApprovalNotificationNotification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

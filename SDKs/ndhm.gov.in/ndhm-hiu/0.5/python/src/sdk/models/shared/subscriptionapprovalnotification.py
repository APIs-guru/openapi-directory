from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import subscriptionstatus_enum
from . import hiusubscription


@dataclass_json
@dataclass
class SubscriptionApprovalNotificationNotification:
    status: subscriptionstatus_enum.SubscriptionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    subscription: Optional[hiusubscription.HiuSubscription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    subscription_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionRequestId' }})
    

@dataclass_json
@dataclass
class SubscriptionApprovalNotification:
    notification: SubscriptionApprovalNotificationNotification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

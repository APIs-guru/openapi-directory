from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class HealthInformationNotificationNotificationNotifierTypeEnum(str, Enum):
    HIU = "HIU"
    HIP = "HIP"


@dataclass_json
@dataclass
class HealthInformationNotificationNotificationNotifier:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: Optional[HealthInformationNotificationNotificationNotifierTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum(str, Enum):
    TRANSFERRED = "TRANSFERRED"
    FAILED = "FAILED"

class HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum(str, Enum):
    DELIVERED = "DELIVERED"
    OK = "OK"
    ERRORED = "ERRORED"


@dataclass_json
@dataclass
class HealthInformationNotificationNotificationStatusNotificationStatusResponses:
    care_context_reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContextReference' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    hi_status: HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiStatus' }})
    

@dataclass_json
@dataclass
class HealthInformationNotificationNotificationStatusNotification:
    hip_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hipId' }})
    session_status: HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionStatus' }})
    status_responses: Optional[List[HealthInformationNotificationNotificationStatusNotificationStatusResponses]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusResponses' }})
    

@dataclass_json
@dataclass
class HealthInformationNotificationNotification:
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentId' }})
    done_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'doneAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notifier: HealthInformationNotificationNotificationNotifier = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifier' }})
    status_notification: HealthInformationNotificationNotificationStatusNotification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statusNotification' }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    

@dataclass_json
@dataclass
class HealthInformationNotification:
    notification: HealthInformationNotificationNotification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

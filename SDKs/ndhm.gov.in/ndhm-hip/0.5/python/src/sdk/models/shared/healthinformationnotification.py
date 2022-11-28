from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class HealthInformationNotificationNotificationNotifierTypeEnum(str, Enum):
    HIU = "HIU"
    HIP = "HIP"


@dataclass_json
@dataclass
class HealthInformationNotificationNotificationNotifier:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[HealthInformationNotificationNotificationNotifierTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
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
    care_context_reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextReference') }})
    hi_status: HealthInformationNotificationNotificationStatusNotificationStatusResponsesHiStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiStatus') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    

@dataclass_json
@dataclass
class HealthInformationNotificationNotificationStatusNotification:
    hip_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hipId') }})
    session_status: HealthInformationNotificationNotificationStatusNotificationSessionStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionStatus') }})
    status_responses: Optional[List[HealthInformationNotificationNotificationStatusNotificationStatusResponses]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusResponses') }})
    

@dataclass_json
@dataclass
class HealthInformationNotificationNotification:
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentId') }})
    done_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('doneAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    notifier: HealthInformationNotificationNotificationNotifier = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifier') }})
    status_notification: HealthInformationNotificationNotificationStatusNotification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statusNotification') }})
    transaction_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactionId') }})
    

@dataclass_json
@dataclass
class HealthInformationNotification:
    notification: HealthInformationNotificationNotification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

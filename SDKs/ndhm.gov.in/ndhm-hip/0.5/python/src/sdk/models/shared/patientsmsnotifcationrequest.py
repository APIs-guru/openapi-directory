from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PatientSmsNotifcationRequestNotificationHip:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

@dataclass_json
@dataclass
class PatientSmsNotifcationRequestNotification:
    care_context_info: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextInfo') }})
    hip: PatientSmsNotifcationRequestNotificationHip = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hip') }})
    phone_no: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNo') }})
    deeplink_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deeplinkUrl') }})
    receiver_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receiverName') }})
    

@dataclass_json
@dataclass
class PatientSmsNotifcationRequest:
    notification: PatientSmsNotifcationRequestNotification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

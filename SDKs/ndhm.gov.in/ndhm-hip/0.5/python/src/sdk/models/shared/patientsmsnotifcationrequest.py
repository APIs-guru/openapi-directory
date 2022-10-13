from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PatientSmsNotifcationRequestNotificationHip:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

@dataclass_json
@dataclass
class PatientSmsNotifcationRequestNotification:
    care_context_info: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContextInfo' }})
    deeplink_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deeplinkUrl' }})
    hip: PatientSmsNotifcationRequestNotificationHip = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hip' }})
    phone_no: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNo' }})
    receiver_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receiverName' }})
    

@dataclass_json
@dataclass
class PatientSmsNotifcationRequest:
    notification: PatientSmsNotifcationRequestNotification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import patientdemographicresponse
from . import accesstokenvalidity

class PatientAuthNotificationAuthStatusEnum(str, Enum):
    GRANTED = "GRANTED"
    DENIED = "DENIED"


@dataclass_json
@dataclass
class PatientAuthNotificationAuth:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    patient: Optional[patientdemographicresponse.PatientDemographicResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    status: PatientAuthNotificationAuthStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    validity: Optional[accesstokenvalidity.AccessTokenValidity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validity' }})
    

@dataclass_json
@dataclass
class PatientAuthNotification:
    auth: Optional[PatientAuthNotificationAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import patientdemographicresponse
from . import accesstokenvalidity
from . import error
from . import requestreference


@dataclass_json
@dataclass
class PatientAuthConfirmResponseAuth:
    access_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    patient: Optional[patientdemographicresponse.PatientDemographicResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    validity: Optional[accesstokenvalidity.AccessTokenValidity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validity' }})
    

@dataclass_json
@dataclass
class PatientAuthConfirmResponse:
    auth: Optional[PatientAuthConfirmResponseAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth' }})
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    resp: requestreference.RequestReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resp' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

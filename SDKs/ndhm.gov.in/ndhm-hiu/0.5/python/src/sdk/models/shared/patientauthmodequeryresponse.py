from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authenticationmode_enum
from . import patientauthpurpose_enum
from . import error
from . import requestreference


@dataclass_json
@dataclass
class PatientAuthModeQueryResponseAuth:
    modes: List[authenticationmode_enum.AuthenticationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'modes' }})
    purpose: patientauthpurpose_enum.PatientAuthPurposeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    

@dataclass_json
@dataclass
class PatientAuthModeQueryResponse:
    auth: Optional[PatientAuthModeQueryResponseAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth' }})
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    resp: requestreference.RequestReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resp' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authmeta
from . import authenticationmode_enum
from . import error
from . import requestreference


@dataclass_json
@dataclass
class PatientAuthInitResponseAuth:
    meta: Optional[authmeta.AuthMeta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    mode: authenticationmode_enum.AuthenticationModeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mode' }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    

@dataclass_json
@dataclass
class PatientAuthInitResponse:
    auth: Optional[PatientAuthInitResponseAuth] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'auth' }})
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    resp: requestreference.RequestReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resp' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

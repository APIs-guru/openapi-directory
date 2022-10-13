from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import authenticationmode_enum
from . import patientauthpurpose_enum
from . import patientauthrequester


@dataclass_json
@dataclass
class PatientAuthInitRequestQuery:
    auth_mode: Optional[authenticationmode_enum.AuthenticationModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authMode' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    purpose: patientauthpurpose_enum.PatientAuthPurposeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    requester: patientauthrequester.PatientAuthRequester = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requester' }})
    

@dataclass_json
@dataclass
class PatientAuthInitRequest:
    query: PatientAuthInitRequestQuery = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

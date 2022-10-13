from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json
from . import patientauthpurpose_enum

class PatientAuthModeQueryRequestQueryRequesterTypeEnum(str, Enum):
    HIP = "HIP"
    HIU = "HIU"


@dataclass_json
@dataclass
class PatientAuthModeQueryRequestQueryRequester:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: PatientAuthModeQueryRequestQueryRequesterTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PatientAuthModeQueryRequestQuery:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    purpose: patientauthpurpose_enum.PatientAuthPurposeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    requester: PatientAuthModeQueryRequestQueryRequester = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requester' }})
    

@dataclass_json
@dataclass
class PatientAuthModeQueryRequest:
    query: PatientAuthModeQueryRequestQuery = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

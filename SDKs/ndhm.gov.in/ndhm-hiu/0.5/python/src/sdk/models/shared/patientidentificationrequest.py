from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PatientIdentificationRequestQueryPatient:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    
class PatientIdentificationRequestQueryRequesterTypeEnum(str, Enum):
    HIU = "HIU"
    HIP = "HIP"


@dataclass_json
@dataclass
class PatientIdentificationRequestQueryRequester:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    type: PatientIdentificationRequestQueryRequesterTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass_json
@dataclass
class PatientIdentificationRequestQuery:
    patient: PatientIdentificationRequestQueryPatient = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    requester: PatientIdentificationRequestQueryRequester = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requester' }})
    

@dataclass_json
@dataclass
class PatientIdentificationRequest:
    query: PatientIdentificationRequestQuery = field(default=None, metadata={'dataclasses_json': { 'field_name': 'query' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

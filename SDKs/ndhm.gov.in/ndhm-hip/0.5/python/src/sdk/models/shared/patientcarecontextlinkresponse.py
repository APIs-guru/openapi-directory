from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import error
from . import requestreference

class PatientCareContextLinkResponseAcknowledgementStatusEnum(str, Enum):
    SUCCESS = "SUCCESS"


@dataclass_json
@dataclass
class PatientCareContextLinkResponseAcknowledgement:
    status: PatientCareContextLinkResponseAcknowledgementStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PatientCareContextLinkResponse:
    acknowledgement: Optional[PatientCareContextLinkResponseAcknowledgement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgement' }})
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    resp: requestreference.RequestReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resp' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

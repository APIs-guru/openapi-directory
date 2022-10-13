from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import error
from . import requestreference

class PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum(str, Enum):
    OK = "OK"


@dataclass_json
@dataclass
class PatientAuthNotificationAcknowledgementAcknowledgement:
    status: PatientAuthNotificationAcknowledgementAcknowledgementStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class PatientAuthNotificationAcknowledgement:
    acknowledgement: Optional[PatientAuthNotificationAcknowledgementAcknowledgement] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'acknowledgement' }})
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    resp: requestreference.RequestReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resp' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

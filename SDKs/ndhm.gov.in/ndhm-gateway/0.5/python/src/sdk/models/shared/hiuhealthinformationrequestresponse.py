from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import error
from . import requestreference

class HiuHealthInformationRequestResponseHiRequestSessionStatusEnum(str, Enum):
    REQUESTED = "REQUESTED"
    ACKNOWLEDGED = "ACKNOWLEDGED"


@dataclass_json
@dataclass
class HiuHealthInformationRequestResponseHiRequest:
    session_status: HiuHealthInformationRequestResponseHiRequestSessionStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionStatus' }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    

@dataclass_json
@dataclass
class HiuHealthInformationRequestResponse:
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    hi_request: Optional[HiuHealthInformationRequestResponseHiRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiRequest' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    resp: requestreference.RequestReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resp' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

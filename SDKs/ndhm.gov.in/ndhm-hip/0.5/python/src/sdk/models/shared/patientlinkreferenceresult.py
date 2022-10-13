from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import error
from . import meta
from . import requestreference

class PatientLinkReferenceResultLinkAuthenticationTypeEnum(str, Enum):
    DIRECT = "DIRECT"
    MEDIATED = "MEDIATED"


@dataclass_json
@dataclass
class PatientLinkReferenceResultLink:
    authentication_type: PatientLinkReferenceResultLinkAuthenticationTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticationType' }})
    meta: Optional[meta.Meta] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'meta' }})
    reference_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceNumber' }})
    

@dataclass_json
@dataclass
class PatientLinkReferenceResult:
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    link: Optional[PatientLinkReferenceResultLink] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'link' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    resp: requestreference.RequestReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resp' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    

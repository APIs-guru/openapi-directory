from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import consentartefactreference
from . import consentstatus_enum
from . import error
from . import requestreference


@dataclass_json
@dataclass
class HiuConsentRequestStatusConsentRequest:
    consent_artefacts: Optional[List[consentartefactreference.ConsentArtefactReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentArtefacts' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    status: consentstatus_enum.ConsentStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class HiuConsentRequestStatus:
    consent_request: Optional[HiuConsentRequestStatusConsentRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentRequest' }})
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    resp: requestreference.RequestReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resp' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

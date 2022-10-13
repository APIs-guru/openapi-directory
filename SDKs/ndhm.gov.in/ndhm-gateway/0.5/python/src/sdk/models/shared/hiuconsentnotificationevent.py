from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import consentartefactreference
from . import consentstatus_enum


@dataclass_json
@dataclass
class HiuConsentNotificationEventNotification:
    consent_artefacts: Optional[List[consentartefactreference.ConsentArtefactReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentArtefacts' }})
    consent_request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentRequestId' }})
    status: consentstatus_enum.ConsentStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class HiuConsentNotificationEvent:
    notification: HiuConsentNotificationEventNotification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

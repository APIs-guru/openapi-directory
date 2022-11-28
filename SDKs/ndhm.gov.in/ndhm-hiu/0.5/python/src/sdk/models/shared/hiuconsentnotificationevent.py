from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class HiuConsentNotificationEventNotification:
    consent_request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentRequestId') }})
    status: ConsentStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    consent_artefacts: Optional[List[ConsentArtefactReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentArtefacts') }})
    

@dataclass_json
@dataclass
class HiuConsentNotificationEvent:
    notification: HiuConsentNotificationEventNotification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

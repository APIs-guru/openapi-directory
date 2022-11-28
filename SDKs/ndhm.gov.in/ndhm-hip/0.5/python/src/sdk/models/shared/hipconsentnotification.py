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
class HipConsentNotificationNotificationConsentDetailCareContexts:
    care_context_reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextReference') }})
    patient_reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patientReference') }})
    

@dataclass_json
@dataclass
class HipConsentNotificationNotificationConsentDetailConsentManager:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class HipConsentNotificationNotificationConsentDetailHip:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class HipConsentNotificationNotificationConsentDetail:
    care_contexts: List[HipConsentNotificationNotificationConsentDetailCareContexts] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContexts') }})
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentId') }})
    consent_manager: HipConsentNotificationNotificationConsentDetailConsentManager = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentManager') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hi_types: List[HiTypeEnumEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiTypes') }})
    hip: HipConsentNotificationNotificationConsentDetailHip = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hip') }})
    patient: ConsentManagerPatientID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    permission: Permission = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    purpose: UsePurpose = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    

@dataclass_json
@dataclass
class HipConsentNotificationNotification:
    consent_detail: HipConsentNotificationNotificationConsentDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentDetail') }})
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentId') }})
    signature: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    status: ConsentStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class HipConsentNotification:
    notification: HipConsentNotificationNotification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('notification') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

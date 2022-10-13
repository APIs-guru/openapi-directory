from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import hitypeenum_enum
from . import consentmanagerpatientid
from . import permission
from . import usepurpose
from . import consentstatus_enum


@dataclass_json
@dataclass
class HipConsentNotificationNotificationConsentDetailCareContexts:
    care_context_reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContextReference' }})
    patient_reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patientReference' }})
    

@dataclass_json
@dataclass
class HipConsentNotificationNotificationConsentDetailConsentManager:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class HipConsentNotificationNotificationConsentDetailHip:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class HipConsentNotificationNotificationConsentDetail:
    care_contexts: List[HipConsentNotificationNotificationConsentDetailCareContexts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContexts' }})
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentId' }})
    consent_manager: HipConsentNotificationNotificationConsentDetailConsentManager = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentManager' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hi_types: List[hitypeenum_enum.HiTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiTypes' }})
    hip: HipConsentNotificationNotificationConsentDetailHip = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hip' }})
    patient: consentmanagerpatientid.ConsentManagerPatientID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    permission: permission.Permission = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    purpose: usepurpose.UsePurpose = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    

@dataclass_json
@dataclass
class HipConsentNotificationNotification:
    consent_detail: HipConsentNotificationNotificationConsentDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentDetail' }})
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentId' }})
    signature: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    status: consentstatus_enum.ConsentStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class HipConsentNotification:
    notification: HipConsentNotificationNotification = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

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
from . import requester
from . import consentstatus_enum
from . import error
from . import requestreference


@dataclass_json
@dataclass
class ConsentArtefactResponseConsentConsentDetailCareContexts:
    care_context_reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContextReference' }})
    patient_reference: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patientReference' }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponseConsentConsentDetailConsentManager:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponseConsentConsentDetailHip:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponseConsentConsentDetailHiu:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponseConsentConsentDetail:
    care_contexts: List[ConsentArtefactResponseConsentConsentDetailCareContexts] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContexts' }})
    consent_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentId' }})
    consent_manager: ConsentArtefactResponseConsentConsentDetailConsentManager = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentManager' }})
    created_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hi_types: List[hitypeenum_enum.HiTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiTypes' }})
    hip: ConsentArtefactResponseConsentConsentDetailHip = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hip' }})
    hiu: ConsentArtefactResponseConsentConsentDetailHiu = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiu' }})
    patient: consentmanagerpatientid.ConsentManagerPatientID = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    permission: permission.Permission = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    purpose: usepurpose.UsePurpose = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    requester: Optional[requester.Requester] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requester' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schemaVersion' }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponseConsent:
    consent_detail: ConsentArtefactResponseConsentConsentDetail = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consentDetail' }})
    signature: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'signature' }})
    status: consentstatus_enum.ConsentStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponse:
    consent: Optional[ConsentArtefactResponseConsent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consent' }})
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    resp: requestreference.RequestReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resp' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

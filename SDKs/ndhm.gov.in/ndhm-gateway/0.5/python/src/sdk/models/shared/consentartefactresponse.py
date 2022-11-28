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
class ConsentArtefactResponseConsentConsentDetailCareContexts:
    care_context_reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContextReference') }})
    patient_reference: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patientReference') }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponseConsentConsentDetailConsentManager:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponseConsentConsentDetailHip:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponseConsentConsentDetailHiu:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponseConsentConsentDetail:
    care_contexts: List[ConsentArtefactResponseConsentConsentDetailCareContexts] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContexts') }})
    consent_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentId') }})
    consent_manager: ConsentArtefactResponseConsentConsentDetailConsentManager = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentManager') }})
    created_at: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('createdAt'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    hi_types: List[HiTypeEnumEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiTypes') }})
    hip: ConsentArtefactResponseConsentConsentDetailHip = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hip') }})
    hiu: ConsentArtefactResponseConsentConsentDetailHiu = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiu') }})
    patient: ConsentManagerPatientID = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    permission: Permission = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    purpose: UsePurpose = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    requester: Optional[Requester] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schemaVersion') }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponseConsent:
    consent_detail: ConsentArtefactResponseConsentConsentDetail = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consentDetail') }})
    signature: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('signature') }})
    status: ConsentStatusEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

@dataclass_json
@dataclass
class ConsentArtefactResponse:
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    resp: RequestReference = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resp') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    consent: Optional[ConsentArtefactResponseConsent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consent') }})
    error: Optional[Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

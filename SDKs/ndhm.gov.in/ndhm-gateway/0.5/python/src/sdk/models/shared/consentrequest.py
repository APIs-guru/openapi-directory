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
class ConsentRequestConsentHip:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class ConsentRequestConsentHiu:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class ConsentRequestConsentPatient:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    

@dataclass_json
@dataclass
class ConsentRequestConsent:
    hi_types: List[HiTypeEnumEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiTypes') }})
    hiu: ConsentRequestConsentHiu = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('hiu') }})
    patient: ConsentRequestConsentPatient = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    permission: Permission = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('permission') }})
    purpose: UsePurpose = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('purpose') }})
    requester: Requester = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requester') }})
    care_contexts: Optional[List[CareContextDefinition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContexts') }})
    hip: Optional[ConsentRequestConsentHip] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hip') }})
    

@dataclass_json
@dataclass
class ConsentRequest:
    consent: ConsentRequestConsent = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('consent') }})
    request_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

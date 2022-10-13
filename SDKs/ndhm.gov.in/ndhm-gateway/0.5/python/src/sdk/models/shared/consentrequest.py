from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import carecontextdefinition
from . import hitypeenum_enum
from . import permission
from . import usepurpose
from . import requester


@dataclass_json
@dataclass
class ConsentRequestConsentHip:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class ConsentRequestConsentHiu:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class ConsentRequestConsentPatient:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass_json
@dataclass
class ConsentRequestConsent:
    care_contexts: Optional[List[carecontextdefinition.CareContextDefinition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContexts' }})
    hi_types: List[hitypeenum_enum.HiTypeEnumEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiTypes' }})
    hip: Optional[ConsentRequestConsentHip] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hip' }})
    hiu: ConsentRequestConsentHiu = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hiu' }})
    patient: ConsentRequestConsentPatient = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    permission: permission.Permission = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permission' }})
    purpose: usepurpose.UsePurpose = field(default=None, metadata={'dataclasses_json': { 'field_name': 'purpose' }})
    requester: requester.Requester = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requester' }})
    

@dataclass_json
@dataclass
class ConsentRequest:
    consent: ConsentRequestConsent = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consent' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

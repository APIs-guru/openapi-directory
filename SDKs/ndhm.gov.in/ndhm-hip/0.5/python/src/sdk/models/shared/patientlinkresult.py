from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import error
from . import carecontextrepresentation
from . import requestreference


@dataclass_json
@dataclass
class PatientLinkResultPatient:
    care_contexts: List[carecontextrepresentation.CareContextRepresentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContexts' }})
    display: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    reference_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceNumber' }})
    

@dataclass_json
@dataclass
class PatientLinkResult:
    error: Optional[error.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    patient: Optional[PatientLinkResultPatient] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    resp: requestreference.RequestReference = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resp' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

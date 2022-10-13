from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from . import carecontext


@dataclass_json
@dataclass
class PatientLinkReferenceRequestPatient:
    care_contexts: List[carecontext.CareContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContexts' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    reference_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceNumber' }})
    

@dataclass_json
@dataclass
class PatientLinkReferenceRequest:
    patient: PatientLinkReferenceRequestPatient = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    

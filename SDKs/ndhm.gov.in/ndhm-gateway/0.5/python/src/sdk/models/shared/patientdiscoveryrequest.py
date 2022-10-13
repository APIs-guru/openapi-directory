from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import patientgender_enum
from . import identifier
from . import identifier


@dataclass_json
@dataclass
class PatientDiscoveryRequestPatient:
    gender: patientgender_enum.PatientGenderEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    unverified_identifiers: Optional[List[identifier.Identifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unverifiedIdentifiers' }})
    verified_identifiers: List[identifier.Identifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifiedIdentifiers' }})
    year_of_birth: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yearOfBirth' }})
    

@dataclass_json
@dataclass
class PatientDiscoveryRequest:
    patient: PatientDiscoveryRequestPatient = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    transaction_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transactionId' }})
    

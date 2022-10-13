from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import patientaddress
from . import patientgender_enum
from . import identifier


@dataclass_json
@dataclass
class ShareProfileRequestPatientUserDemographics:
    address: Optional[patientaddress.PatientAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    day_of_birth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dayOfBirth' }})
    gender: patientgender_enum.PatientGenderEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    health_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthId' }})
    health_id_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthIdNumber' }})
    identifiers: Optional[List[identifier.Identifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifiers' }})
    month_of_birth: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'monthOfBirth' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    year_of_birth: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yearOfBirth' }})
    

@dataclass_json
@dataclass
class ShareProfileRequestPatient:
    hip_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hipCode' }})
    user_demographics: ShareProfileRequestPatientUserDemographics = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userDemographics' }})
    

@dataclass_json
@dataclass
class ShareProfileRequest:
    patient: ShareProfileRequestPatient = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    request_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

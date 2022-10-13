from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import patientaddress
from . import patientgender_enum
from . import identifier


@dataclass_json
@dataclass
class PatientDemographicResponse:
    address: Optional[patientaddress.PatientAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    gender: patientgender_enum.PatientGenderEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    identifiers: Optional[List[identifier.Identifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifiers' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    year_of_birth: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yearOfBirth' }})
    

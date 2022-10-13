from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import patientgender_enum
from . import authconfirmidentifier


@dataclass_json
@dataclass
class PatientDemographic:
    date_of_birth: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dateOfBirth' }})
    gender: patientgender_enum.PatientGenderEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gender' }})
    identifier: Optional[authconfirmidentifier.AuthConfirmIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identifier' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    

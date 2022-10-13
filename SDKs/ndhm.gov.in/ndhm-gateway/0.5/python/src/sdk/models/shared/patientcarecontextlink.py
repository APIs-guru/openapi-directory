from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import carecontextrepresentation


@dataclass_json
@dataclass
class PatientCareContextLinkPatient:
    care_contexts: List[carecontextrepresentation.CareContextRepresentation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'careContexts' }})
    display: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    reference_number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referenceNumber' }})
    

@dataclass_json
@dataclass
class PatientCareContextLink:
    access_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessToken' }})
    patient: PatientCareContextLinkPatient = field(default=None, metadata={'dataclasses_json': { 'field_name': 'patient' }})
    

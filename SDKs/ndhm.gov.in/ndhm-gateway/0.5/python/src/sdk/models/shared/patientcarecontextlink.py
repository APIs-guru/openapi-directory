from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatientCareContextLinkPatient:
    care_contexts: List[CareContextRepresentation] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('careContexts') }})
    display: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('display') }})
    reference_number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('referenceNumber') }})
    

@dataclass_json
@dataclass
class PatientCareContextLink:
    access_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessToken') }})
    patient: PatientCareContextLinkPatient = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('patient') }})
    

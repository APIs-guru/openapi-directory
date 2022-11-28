from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PatientDemographicResponse:
    gender: PatientGenderEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('gender') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    year_of_birth: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearOfBirth') }})
    address: Optional[PatientAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    identifiers: Optional[List[Identifier]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identifiers') }})
    

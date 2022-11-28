from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PersonName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    person_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person_guid') }})
    registrations: Optional[List[RegistrationsNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrations') }})
    

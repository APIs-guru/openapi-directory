from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PersonList:
    first_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('first_name') }})
    surname: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('surname') }})
    contact_cell: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_cell') }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_email') }})
    contact_tel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_tel') }})
    person_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('person_guid') }})
    registrations: Optional[List[RegistrationsList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registrations') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import registrationslist


@dataclass_json
@dataclass
class PersonList:
    contact_cell: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_cell' }})
    contact_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_email' }})
    contact_tel: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_tel' }})
    first_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    person_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person_guid' }})
    registrations: Optional[List[registrationslist.RegistrationsList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrations' }})
    surname: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'surname' }})
    

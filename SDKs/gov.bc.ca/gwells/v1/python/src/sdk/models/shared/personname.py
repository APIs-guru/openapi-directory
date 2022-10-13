from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import registrationsnumber


@dataclass_json
@dataclass
class PersonName:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    person_guid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person_guid' }})
    registrations: Optional[List[registrationsnumber.RegistrationsNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrations' }})
    

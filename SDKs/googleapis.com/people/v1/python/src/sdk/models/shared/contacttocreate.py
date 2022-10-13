from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import person


@dataclass_json
@dataclass
class ContactToCreate:
    contact_person: Optional[person.Person] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactPerson' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import emailaddress
from . import name
from . import phonenumber
from . import photo


@dataclass_json
@dataclass
class Person:
    email_addresses: Optional[List[emailaddress.EmailAddress]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddresses' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    obfuscated_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'obfuscatedId' }})
    person_names: Optional[List[name.Name]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personNames' }})
    phone_numbers: Optional[List[phonenumber.PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumbers' }})
    photos: Optional[List[photo.Photo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'photos' }})
    

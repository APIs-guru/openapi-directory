from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Person:
    r"""Person
    Object to represent a person.
    """
    
    email_addresses: Optional[List[EmailAddress]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailAddresses') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    obfuscated_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('obfuscatedId') }})
    person_names: Optional[List[Name]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personNames') }})
    phone_numbers: Optional[List[PhoneNumber]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumbers') }})
    photos: Optional[List[Photo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('photos') }})
    

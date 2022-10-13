from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ElectionOfficial:
    email_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailAddress' }})
    fax_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'faxNumber' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    office_phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'officePhoneNumber' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    

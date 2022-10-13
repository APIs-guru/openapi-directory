from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContactInfo:
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countryCode' }})
    hashed_emails: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashedEmails' }})
    hashed_first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashedFirstName' }})
    hashed_last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashedLastName' }})
    hashed_phone_numbers: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hashedPhoneNumbers' }})
    zip_codes: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zipCodes' }})
    

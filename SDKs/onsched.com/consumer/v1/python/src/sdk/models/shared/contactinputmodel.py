from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContactInputModel:
    business_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessPhone' }})
    business_phone_ext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'businessPhoneExt' }})
    conference_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conferenceInfo' }})
    home_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homePhone' }})
    mobile_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobilePhone' }})
    preferred_phone_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredPhoneType' }})
    skype_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skypeUsername' }})
    

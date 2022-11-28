from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ContactInputModel:
    business_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessPhone') }})
    business_phone_ext: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('businessPhoneExt') }})
    conference_info: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conferenceInfo') }})
    home_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homePhone') }})
    mobile_phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobilePhone') }})
    preferred_phone_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredPhoneType') }})
    skype_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skypeUsername') }})
    

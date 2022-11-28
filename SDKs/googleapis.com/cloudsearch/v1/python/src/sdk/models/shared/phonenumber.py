from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PhoneNumberTypeEnum(str, Enum):
    OTHER = "OTHER"
    MOBILE = "MOBILE"
    OFFICE = "OFFICE"


@dataclass_json
@dataclass
class PhoneNumber:
    r"""PhoneNumber
    A person's Phone Number
    """
    
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    type: Optional[PhoneNumberTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

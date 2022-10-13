from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PhoneNumberTypeEnum(str, Enum):
    OTHER = "OTHER"
    MOBILE = "MOBILE"
    OFFICE = "OFFICE"


@dataclass_json
@dataclass
class PhoneNumber:
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    type: Optional[PhoneNumberTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PhoneVerificationData:
    r"""PhoneVerificationData
    Display Data for verifications through phone, e.g. phone call, sms.
    """
    
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    

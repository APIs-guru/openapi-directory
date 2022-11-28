from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AccountBusinessInformation:
    address: Optional[AccountAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    customer_service: Optional[AccountCustomerService] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerService') }})
    korean_business_registration_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('koreanBusinessRegistrationNumber') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    

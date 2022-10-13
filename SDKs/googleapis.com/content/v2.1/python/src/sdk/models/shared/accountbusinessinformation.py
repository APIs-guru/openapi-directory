from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import accountaddress
from . import accountcustomerservice


@dataclass_json
@dataclass
class AccountBusinessInformation:
    address: Optional[accountaddress.AccountAddress] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    customer_service: Optional[accountcustomerservice.AccountCustomerService] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerService' }})
    korean_business_registration_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'koreanBusinessRegistrationNumber' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    phone_verification_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneVerificationStatus' }})
    

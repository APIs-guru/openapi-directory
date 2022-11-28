from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum(str, Enum):
    CUSTOMER_TYPE_UNSPECIFIED = "CUSTOMER_TYPE_UNSPECIFIED"
    DOMAIN = "DOMAIN"
    TEAM = "TEAM"


@dataclass_json
@dataclass
class GoogleCloudChannelV1CloudIdentityInfo:
    r"""GoogleCloudChannelV1CloudIdentityInfo
    Cloud Identity information for the Cloud Channel Customer.
    """
    
    admin_console_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminConsoleUri') }})
    alternate_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateEmail') }})
    customer_type: Optional[GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerType') }})
    edu_data: Optional[GoogleCloudChannelV1EduData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eduData') }})
    is_domain_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isDomainVerified') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    primary_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('primaryDomain') }})
    

@dataclass_json
@dataclass
class GoogleCloudChannelV1CloudIdentityInfoInput:
    r"""GoogleCloudChannelV1CloudIdentityInfoInput
    Cloud Identity information for the Cloud Channel Customer.
    """
    
    alternate_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternateEmail') }})
    customer_type: Optional[GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerType') }})
    edu_data: Optional[GoogleCloudChannelV1EduData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eduData') }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('languageCode') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    

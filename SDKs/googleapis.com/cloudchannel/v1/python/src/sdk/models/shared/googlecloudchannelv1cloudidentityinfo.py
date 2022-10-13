from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import googlecloudchannelv1edudata

class GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum(str, Enum):
    CUSTOMER_TYPE_UNSPECIFIED = "CUSTOMER_TYPE_UNSPECIFIED"
    DOMAIN = "DOMAIN"
    TEAM = "TEAM"


@dataclass_json
@dataclass
class GoogleCloudChannelV1CloudIdentityInfo:
    admin_console_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminConsoleUri' }})
    alternate_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternateEmail' }})
    customer_type: Optional[GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerType' }})
    edu_data: Optional[googlecloudchannelv1edudata.GoogleCloudChannelV1EduData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eduData' }})
    is_domain_verified: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isDomainVerified' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phoneNumber' }})
    primary_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDomain' }})
    

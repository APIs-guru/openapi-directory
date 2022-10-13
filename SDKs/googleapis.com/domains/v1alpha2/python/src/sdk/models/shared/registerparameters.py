from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import money

class RegisterParametersAvailabilityEnum(str, Enum):
    AVAILABILITY_UNSPECIFIED = "AVAILABILITY_UNSPECIFIED"
    AVAILABLE = "AVAILABLE"
    UNAVAILABLE = "UNAVAILABLE"
    UNSUPPORTED = "UNSUPPORTED"
    UNKNOWN = "UNKNOWN"

class RegisterParametersDomainNoticesEnum(str, Enum):
    DOMAIN_NOTICE_UNSPECIFIED = "DOMAIN_NOTICE_UNSPECIFIED"
    HSTS_PRELOADED = "HSTS_PRELOADED"

class RegisterParametersSupportedPrivacyEnum(str, Enum):
    CONTACT_PRIVACY_UNSPECIFIED = "CONTACT_PRIVACY_UNSPECIFIED"
    PUBLIC_CONTACT_DATA = "PUBLIC_CONTACT_DATA"
    PRIVATE_CONTACT_DATA = "PRIVATE_CONTACT_DATA"
    REDACTED_CONTACT_DATA = "REDACTED_CONTACT_DATA"


@dataclass_json
@dataclass
class RegisterParameters:
    availability: Optional[RegisterParametersAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    domain_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainName' }})
    domain_notices: Optional[List[RegisterParametersDomainNoticesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainNotices' }})
    supported_privacy: Optional[List[RegisterParametersSupportedPrivacyEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'supportedPrivacy' }})
    yearly_price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yearlyPrice' }})
    

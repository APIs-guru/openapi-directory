from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import registration
from . import money

class RegisterDomainRequestContactNoticesEnum(str, Enum):
    CONTACT_NOTICE_UNSPECIFIED = "CONTACT_NOTICE_UNSPECIFIED"
    PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"

class RegisterDomainRequestDomainNoticesEnum(str, Enum):
    DOMAIN_NOTICE_UNSPECIFIED = "DOMAIN_NOTICE_UNSPECIFIED"
    HSTS_PRELOADED = "HSTS_PRELOADED"


@dataclass_json
@dataclass
class RegisterDomainRequest:
    contact_notices: Optional[List[RegisterDomainRequestContactNoticesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactNotices' }})
    domain_notices: Optional[List[RegisterDomainRequestDomainNoticesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domainNotices' }})
    registration: Optional[registration.Registration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    yearly_price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yearlyPrice' }})
    

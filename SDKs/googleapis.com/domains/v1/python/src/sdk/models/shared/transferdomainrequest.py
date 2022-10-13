from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import authorizationcode
from . import registration
from . import money

class TransferDomainRequestContactNoticesEnum(str, Enum):
    CONTACT_NOTICE_UNSPECIFIED = "CONTACT_NOTICE_UNSPECIFIED"
    PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"


@dataclass_json
@dataclass
class TransferDomainRequest:
    authorization_code: Optional[authorizationcode.AuthorizationCode] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationCode' }})
    contact_notices: Optional[List[TransferDomainRequestContactNoticesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contactNotices' }})
    registration: Optional[registration.Registration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registration' }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validateOnly' }})
    yearly_price: Optional[money.Money] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yearlyPrice' }})
    

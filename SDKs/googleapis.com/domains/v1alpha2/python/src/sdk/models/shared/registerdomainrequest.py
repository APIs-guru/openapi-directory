from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RegisterDomainRequestContactNoticesEnum(str, Enum):
    CONTACT_NOTICE_UNSPECIFIED = "CONTACT_NOTICE_UNSPECIFIED"
    PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"

class RegisterDomainRequestDomainNoticesEnum(str, Enum):
    DOMAIN_NOTICE_UNSPECIFIED = "DOMAIN_NOTICE_UNSPECIFIED"
    HSTS_PRELOADED = "HSTS_PRELOADED"


@dataclass_json
@dataclass
class RegisterDomainRequestInput:
    r"""RegisterDomainRequestInput
    Request for the `RegisterDomain` method.
    """
    
    contact_notices: Optional[List[RegisterDomainRequestContactNoticesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactNotices') }})
    domain_notices: Optional[List[RegisterDomainRequestDomainNoticesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('domainNotices') }})
    registration: Optional[RegistrationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration') }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    yearly_price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearlyPrice') }})
    

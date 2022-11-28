from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TransferDomainRequestContactNoticesEnum(str, Enum):
    CONTACT_NOTICE_UNSPECIFIED = "CONTACT_NOTICE_UNSPECIFIED"
    PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT = "PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT"


@dataclass_json
@dataclass
class TransferDomainRequestInput:
    r"""TransferDomainRequestInput
    Request for the `TransferDomain` method.
    """
    
    authorization_code: Optional[AuthorizationCode] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationCode') }})
    contact_notices: Optional[List[TransferDomainRequestContactNoticesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contactNotices') }})
    registration: Optional[RegistrationInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registration') }})
    validate_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('validateOnly') }})
    yearly_price: Optional[Money] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yearlyPrice') }})
    

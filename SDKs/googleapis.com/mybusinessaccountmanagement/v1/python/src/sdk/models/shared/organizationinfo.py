from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrganizationInfo:
    r"""OrganizationInfo
    Additional information stored for an organization.
    """
    
    address: Optional[PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    registered_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('registeredDomain') }})
    

@dataclass_json
@dataclass
class OrganizationInfoInput:
    r"""OrganizationInfoInput
    Additional information stored for an organization.
    """
    
    address: Optional[PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Contact:
    r"""Contact
    Details required for a contact associated with a `Registration`.
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    fax_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('faxNumber') }})
    phone_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phoneNumber') }})
    postal_address: Optional[PostalAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('postalAddress') }})
    

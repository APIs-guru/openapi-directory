from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TokenPayloadExternal:
    r"""TokenPayloadExternal
    Contains basic app information and integrity signals like device attestation and licensing details.
    """
    
    account_details: Optional[AccountDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountDetails') }})
    app_integrity: Optional[AppIntegrity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appIntegrity') }})
    device_integrity: Optional[DeviceIntegrity] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIntegrity') }})
    request_details: Optional[RequestDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestDetails') }})
    testing_details: Optional[TestingDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('testingDetails') }})
    

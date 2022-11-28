from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthenticationObject:
    r"""AuthenticationObject
    Authentication object.
    
    """
    
    authentication_method_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationMethodId') }})
    authentication_type: AuthenticationTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationType') }})
    authentication_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authenticationVersion') }})
    explanation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explanation') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    

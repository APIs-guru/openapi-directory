from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Account:
    r"""Account
    Represents an account passed into the Account Manager on Glass.
    """
    
    auth_tokens: Optional[List[AuthToken]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authTokens') }})
    features: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('features') }})
    password: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('password') }})
    user_data: Optional[List[UserData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userData') }})
    

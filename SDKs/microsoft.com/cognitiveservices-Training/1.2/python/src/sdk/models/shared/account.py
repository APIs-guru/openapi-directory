from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Account:
    r"""Account
    Represents a user account
    """
    
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Email') }})
    keys: Optional[APIKeys] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Keys') }})
    quotas: Optional[AccountQuota] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quotas') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserName') }})
    

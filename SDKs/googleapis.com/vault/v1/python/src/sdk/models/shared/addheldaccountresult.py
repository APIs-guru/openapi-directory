from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddHeldAccountResult:
    r"""AddHeldAccountResult
    The status of each account creation, and the **HeldAccount**, if successful.
    """
    
    account: Optional[HeldAccount] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    status: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    

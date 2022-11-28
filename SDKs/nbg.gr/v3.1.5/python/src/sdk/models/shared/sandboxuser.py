from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SandboxUser:
    r"""SandboxUser
    User data
    """
    
    accounts: Optional[List[SandboxBankAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    cards: Optional[List[SandboxCard]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cards') }})
    retry_cache_entries: Optional[List[SandboxRetryCacheEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('retryCacheEntries') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sandboxbankaccount
from . import sandboxcard
from . import sandboxretrycacheentry


@dataclass_json
@dataclass
class SandboxUser:
    accounts: Optional[List[sandboxbankaccount.SandboxBankAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    cards: Optional[List[sandboxcard.SandboxCard]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cards' }})
    retry_cache_entries: Optional[List[sandboxretrycacheentry.SandboxRetryCacheEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'retryCacheEntries' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    

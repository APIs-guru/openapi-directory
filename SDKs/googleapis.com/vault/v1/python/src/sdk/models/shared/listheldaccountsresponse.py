from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import heldaccount


@dataclass_json
@dataclass
class ListHeldAccountsResponse:
    accounts: Optional[List[heldaccount.HeldAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    

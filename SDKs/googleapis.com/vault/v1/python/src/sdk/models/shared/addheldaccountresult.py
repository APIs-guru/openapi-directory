from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import heldaccount
from . import status


@dataclass_json
@dataclass
class AddHeldAccountResult:
    account: Optional[heldaccount.HeldAccount] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    

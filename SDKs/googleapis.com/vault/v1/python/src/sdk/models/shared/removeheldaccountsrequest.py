from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RemoveHeldAccountsRequest:
    r"""RemoveHeldAccountsRequest
    Remove a list of accounts from a hold.
    """
    
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountIds') }})
    

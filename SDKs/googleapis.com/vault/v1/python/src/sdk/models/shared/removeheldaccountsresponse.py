from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RemoveHeldAccountsResponse:
    r"""RemoveHeldAccountsResponse
    Response for batch delete held accounts.
    """
    
    statuses: Optional[List[Status]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('statuses') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListHeldAccountsResponse:
    r"""ListHeldAccountsResponse
    Returns a list of the accounts covered by a hold.
    """
    
    accounts: Optional[List[HeldAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accounts') }})
    

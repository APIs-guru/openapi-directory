from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReadAccountBalanceResponse200:
    r"""ReadAccountBalanceResponse200
    Body of the response for a successful read balance for an account request.
    """
    
    balances: List[Balance] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('balances') }})
    account: Optional[AccountReference16Ch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    

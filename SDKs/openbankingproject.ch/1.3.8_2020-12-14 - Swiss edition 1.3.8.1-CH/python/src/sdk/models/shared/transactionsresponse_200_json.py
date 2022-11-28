from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TransactionsResponse200JSON:
    r"""TransactionsResponse200JSON
    Body of the JSON response for a successful read transaction list request.
    This account report contains transactions resulting from the query parameters.
    
    """
    
    links: Optional[dict[str, HrefType]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('_links') }})
    account: Optional[AccountReference16Ch] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account') }})
    balances: Optional[List[Balance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('balances') }})
    transactions: Optional[AccountReport] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transactions') }})
    

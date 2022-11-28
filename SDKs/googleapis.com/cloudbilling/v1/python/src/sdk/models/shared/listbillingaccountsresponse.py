from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListBillingAccountsResponse:
    r"""ListBillingAccountsResponse
    Response message for `ListBillingAccounts`.
    """
    
    billing_accounts: Optional[List[BillingAccount]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingAccounts') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

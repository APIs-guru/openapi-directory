from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import billingaccount


@dataclass_json
@dataclass
class ListBillingAccountsResponse:
    billing_accounts: Optional[List[billingaccount.BillingAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billingAccounts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

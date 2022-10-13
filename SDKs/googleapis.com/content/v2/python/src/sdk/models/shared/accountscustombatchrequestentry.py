from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import account
from . import accountscustombatchrequestentrylinkrequest


@dataclass_json
@dataclass
class AccountsCustomBatchRequestEntry:
    account: Optional[account.Account] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    batch_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'batchId' }})
    force: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'force' }})
    label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelIds' }})
    link_request: Optional[accountscustombatchrequestentrylinkrequest.AccountsCustomBatchRequestEntryLinkRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkRequest' }})
    merchant_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'merchantId' }})
    method: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'method' }})
    overwrite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overwrite' }})
    

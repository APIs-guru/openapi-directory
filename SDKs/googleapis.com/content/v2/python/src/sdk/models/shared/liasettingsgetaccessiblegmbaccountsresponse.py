from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import gmbaccountsgmbaccount


@dataclass_json
@dataclass
class LiasettingsGetAccessibleGmbAccountsResponse:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accountId' }})
    gmb_accounts: Optional[List[gmbaccountsgmbaccount.GmbAccountsGmbAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gmbAccounts' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

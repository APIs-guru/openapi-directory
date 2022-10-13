from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import subaccount


@dataclass_json
@dataclass
class SubaccountsListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    subaccounts: Optional[List[subaccount.Subaccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subaccounts' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import serviceaccount


@dataclass_json
@dataclass
class ListServiceAccountsResponse:
    accounts: Optional[List[serviceaccount.ServiceAccount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accounts' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

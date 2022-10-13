from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accounttax


@dataclass_json
@dataclass
class AccounttaxListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    resources: Optional[List[accounttax.AccountTax]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resources' }})
    

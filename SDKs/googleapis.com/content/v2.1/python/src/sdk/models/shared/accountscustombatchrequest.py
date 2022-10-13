from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountscustombatchrequestentry


@dataclass_json
@dataclass
class AccountsCustomBatchRequest:
    entries: Optional[List[accountscustombatchrequestentry.AccountsCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

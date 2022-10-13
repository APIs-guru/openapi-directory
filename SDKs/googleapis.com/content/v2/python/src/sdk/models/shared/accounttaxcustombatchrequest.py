from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accounttaxcustombatchrequestentry


@dataclass_json
@dataclass
class AccounttaxCustomBatchRequest:
    entries: Optional[List[accounttaxcustombatchrequestentry.AccounttaxCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

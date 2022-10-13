from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountstatusescustombatchrequestentry


@dataclass_json
@dataclass
class AccountstatusesCustomBatchRequest:
    entries: Optional[List[accountstatusescustombatchrequestentry.AccountstatusesCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accounttaxcustombatchresponseentry


@dataclass_json
@dataclass
class AccounttaxCustomBatchResponse:
    entries: Optional[List[accounttaxcustombatchresponseentry.AccounttaxCustomBatchResponseEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

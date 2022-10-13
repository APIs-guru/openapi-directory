from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accountscustombatchresponseentry


@dataclass_json
@dataclass
class AccountsCustomBatchResponse:
    entries: Optional[List[accountscustombatchresponseentry.AccountsCustomBatchResponseEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

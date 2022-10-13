from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import localinventorycustombatchrequestentry


@dataclass_json
@dataclass
class LocalinventoryCustomBatchRequest:
    entries: Optional[List[localinventorycustombatchrequestentry.LocalinventoryCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

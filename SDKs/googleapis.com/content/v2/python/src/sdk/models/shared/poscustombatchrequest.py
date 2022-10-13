from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import poscustombatchrequestentry


@dataclass_json
@dataclass
class PosCustomBatchRequest:
    entries: Optional[List[poscustombatchrequestentry.PosCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

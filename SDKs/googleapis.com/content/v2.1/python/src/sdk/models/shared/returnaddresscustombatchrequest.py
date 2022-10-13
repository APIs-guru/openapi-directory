from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import returnaddresscustombatchrequestentry


@dataclass_json
@dataclass
class ReturnaddressCustomBatchRequest:
    entries: Optional[List[returnaddresscustombatchrequestentry.ReturnaddressCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

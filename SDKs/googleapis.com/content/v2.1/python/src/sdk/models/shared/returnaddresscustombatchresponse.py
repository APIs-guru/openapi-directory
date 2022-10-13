from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import returnaddresscustombatchresponseentry


@dataclass_json
@dataclass
class ReturnaddressCustomBatchResponse:
    entries: Optional[List[returnaddresscustombatchresponseentry.ReturnaddressCustomBatchResponseEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

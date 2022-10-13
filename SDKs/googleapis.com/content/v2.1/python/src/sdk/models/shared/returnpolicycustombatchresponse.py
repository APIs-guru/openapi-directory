from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import returnpolicycustombatchresponseentry


@dataclass_json
@dataclass
class ReturnpolicyCustomBatchResponse:
    entries: Optional[List[returnpolicycustombatchresponseentry.ReturnpolicyCustomBatchResponseEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

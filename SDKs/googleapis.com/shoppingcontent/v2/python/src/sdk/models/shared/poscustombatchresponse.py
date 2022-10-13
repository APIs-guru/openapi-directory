from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import poscustombatchresponseentry


@dataclass_json
@dataclass
class PosCustomBatchResponse:
    entries: Optional[List[poscustombatchresponseentry.PosCustomBatchResponseEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

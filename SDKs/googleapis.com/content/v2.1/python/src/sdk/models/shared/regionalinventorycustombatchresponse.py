from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regionalinventorycustombatchresponseentry


@dataclass_json
@dataclass
class RegionalinventoryCustomBatchResponse:
    entries: Optional[List[regionalinventorycustombatchresponseentry.RegionalinventoryCustomBatchResponseEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

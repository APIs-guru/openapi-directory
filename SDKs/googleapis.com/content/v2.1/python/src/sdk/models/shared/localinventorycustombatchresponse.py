from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import localinventorycustombatchresponseentry


@dataclass_json
@dataclass
class LocalinventoryCustomBatchResponse:
    entries: Optional[List[localinventorycustombatchresponseentry.LocalinventoryCustomBatchResponseEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    

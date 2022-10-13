from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import regionalinventorycustombatchrequestentry


@dataclass_json
@dataclass
class RegionalinventoryCustomBatchRequest:
    entries: Optional[List[regionalinventorycustombatchrequestentry.RegionalinventoryCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

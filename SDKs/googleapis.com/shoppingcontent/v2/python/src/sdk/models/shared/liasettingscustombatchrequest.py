from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import liasettingscustombatchrequestentry


@dataclass_json
@dataclass
class LiasettingsCustomBatchRequest:
    entries: Optional[List[liasettingscustombatchrequestentry.LiasettingsCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

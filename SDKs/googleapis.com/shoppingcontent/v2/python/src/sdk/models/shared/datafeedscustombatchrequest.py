from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datafeedscustombatchrequestentry


@dataclass_json
@dataclass
class DatafeedsCustomBatchRequest:
    entries: Optional[List[datafeedscustombatchrequestentry.DatafeedsCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

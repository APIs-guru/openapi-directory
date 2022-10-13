from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datafeedstatusescustombatchrequestentry


@dataclass_json
@dataclass
class DatafeedstatusesCustomBatchRequest:
    entries: Optional[List[datafeedstatusescustombatchrequestentry.DatafeedstatusesCustomBatchRequestEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    

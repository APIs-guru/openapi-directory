from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pullresponse


@dataclass_json
@dataclass
class PullBatchResponse:
    pull_responses: Optional[List[pullresponse.PullResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pullResponses' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlerpcstatus


@dataclass_json
@dataclass
class GoogleCloudDatalabelingV1beta1Attempt:
    attempt_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attemptTime' }})
    partial_failures: Optional[List[googlerpcstatus.GoogleRPCStatus]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partialFailures' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ModifyAckDeadlineRequest:
    ack_deadline_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ackDeadlineSeconds' }})
    ack_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ackIds' }})
    

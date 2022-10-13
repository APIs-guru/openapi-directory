from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workermessage


@dataclass_json
@dataclass
class SendWorkerMessagesRequest:
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    worker_messages: Optional[List[workermessage.WorkerMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerMessages' }})
    

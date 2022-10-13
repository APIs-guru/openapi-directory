from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import workermessageresponse


@dataclass_json
@dataclass
class SendWorkerMessagesResponse:
    worker_message_responses: Optional[List[workermessageresponse.WorkerMessageResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerMessageResponses' }})
    

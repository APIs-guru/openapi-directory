from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SendWorkerMessagesRequest:
    r"""SendWorkerMessagesRequest
    A request for sending worker messages to the service.
    """
    
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    worker_messages: Optional[List[WorkerMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerMessages') }})
    

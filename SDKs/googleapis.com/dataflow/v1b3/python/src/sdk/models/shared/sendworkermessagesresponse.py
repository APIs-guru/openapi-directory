from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SendWorkerMessagesResponse:
    r"""SendWorkerMessagesResponse
    The response to the worker messages.
    """
    
    worker_message_responses: Optional[List[WorkerMessageResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerMessageResponses') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ResponseStatusEnum(str, Enum):
    WAITING_IN_QUEUE = "waiting_in_queue"
    PROCESSING = "processing"
    FINISHED = "finished"


@dataclass_json
@dataclass
class Response:
    copyrights: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyrights') }})
    processing_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('processing_time') }})
    solution: Optional[Solution] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solution') }})
    status: Optional[ResponseStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    waiting_time_in_queue: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('waiting_time_in_queue') }})
    

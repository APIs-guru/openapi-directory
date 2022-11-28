from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PublishBatchRequest:
    r"""PublishBatchRequest
    Request for the PublishBatch method.
    """
    
    messages: Optional[List[PubsubMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topic') }})
    

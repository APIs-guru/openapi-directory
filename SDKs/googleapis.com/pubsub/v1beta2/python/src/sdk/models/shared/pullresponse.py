from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PullResponse:
    r"""PullResponse
    Response for the `Pull` method.
    """
    
    received_messages: Optional[List[ReceivedMessage]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('receivedMessages') }})
    

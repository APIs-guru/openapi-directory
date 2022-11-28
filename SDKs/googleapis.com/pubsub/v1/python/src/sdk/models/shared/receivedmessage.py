from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReceivedMessage:
    r"""ReceivedMessage
    A message and its corresponding acknowledgment ID.
    """
    
    ack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ackId') }})
    delivery_attempt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryAttempt') }})
    message: Optional[PubsubMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pubsubmessage


@dataclass_json
@dataclass
class ReceivedMessage:
    ack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ackId' }})
    delivery_attempt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryAttempt' }})
    message: Optional[pubsubmessage.PubsubMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

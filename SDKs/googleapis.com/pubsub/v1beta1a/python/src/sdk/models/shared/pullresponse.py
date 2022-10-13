from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pubsubevent


@dataclass_json
@dataclass
class PullResponse:
    ack_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ackId' }})
    pubsub_event: Optional[pubsubevent.PubsubEvent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsubEvent' }})
    

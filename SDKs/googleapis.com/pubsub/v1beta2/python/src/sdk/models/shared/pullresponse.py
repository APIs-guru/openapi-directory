from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import receivedmessage


@dataclass_json
@dataclass
class PullResponse:
    received_messages: Optional[List[receivedmessage.ReceivedMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receivedMessages' }})
    

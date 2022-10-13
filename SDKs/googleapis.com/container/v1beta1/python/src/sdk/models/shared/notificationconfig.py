from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pubsub


@dataclass_json
@dataclass
class NotificationConfig:
    pubsub: Optional[pubsub.PubSub] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pubsub' }})
    

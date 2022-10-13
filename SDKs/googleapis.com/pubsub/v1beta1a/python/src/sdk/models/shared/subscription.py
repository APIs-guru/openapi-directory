from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pushconfig


@dataclass_json
@dataclass
class Subscription:
    ack_deadline_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ackDeadlineSeconds' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    push_config: Optional[pushconfig.PushConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pushConfig' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    

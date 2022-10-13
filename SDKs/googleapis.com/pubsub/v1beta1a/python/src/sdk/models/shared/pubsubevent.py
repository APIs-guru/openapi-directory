from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import pubsubmessage


@dataclass_json
@dataclass
class PubsubEvent:
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deleted' }})
    message: Optional[pubsubmessage.PubsubMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscription' }})
    truncated: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'truncated' }})
    

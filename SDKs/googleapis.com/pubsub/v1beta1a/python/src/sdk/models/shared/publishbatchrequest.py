from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import pubsubmessage


@dataclass_json
@dataclass
class PublishBatchRequest:
    messages: Optional[List[pubsubmessage.PubsubMessage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messages' }})
    topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    

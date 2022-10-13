from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import topic


@dataclass_json
@dataclass
class UpdateTopicRequest:
    topic: Optional[topic.Topic] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topic' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    

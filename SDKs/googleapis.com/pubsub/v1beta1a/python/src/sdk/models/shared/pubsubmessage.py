from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import label


@dataclass_json
@dataclass
class PubsubMessage:
    data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    label: Optional[List[label.Label]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    message_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'messageId' }})
    publish_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publishTime' }})
    

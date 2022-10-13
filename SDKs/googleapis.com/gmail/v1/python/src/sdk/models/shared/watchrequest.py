from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class WatchRequestLabelFilterActionEnum(str, Enum):
    INCLUDE = "include"
    EXCLUDE = "exclude"


@dataclass_json
@dataclass
class WatchRequest:
    label_filter_action: Optional[WatchRequestLabelFilterActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelFilterAction' }})
    label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelIds' }})
    topic_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'topicName' }})
    

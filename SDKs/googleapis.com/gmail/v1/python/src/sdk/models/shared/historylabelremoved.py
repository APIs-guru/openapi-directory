from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import message


@dataclass_json
@dataclass
class HistoryLabelRemoved:
    label_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labelIds' }})
    message: Optional[message.Message] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

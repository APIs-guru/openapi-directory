from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trigger


@dataclass_json
@dataclass
class ListTriggersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    triggers: Optional[List[trigger.Trigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggers' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

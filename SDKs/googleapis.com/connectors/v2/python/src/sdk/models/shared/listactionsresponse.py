from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import action


@dataclass_json
@dataclass
class ListActionsResponse:
    actions: Optional[List[action.Action]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unsupported_action_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unsupportedActionNames' }})
    

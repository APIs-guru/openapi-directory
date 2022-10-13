from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import buildtrigger


@dataclass_json
@dataclass
class ListBuildTriggersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    triggers: Optional[List[buildtrigger.BuildTrigger]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'triggers' }})
    

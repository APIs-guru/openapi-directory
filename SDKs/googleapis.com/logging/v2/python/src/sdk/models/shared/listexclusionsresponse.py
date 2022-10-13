from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import logexclusion


@dataclass_json
@dataclass
class ListExclusionsResponse:
    exclusions: Optional[List[logexclusion.LogExclusion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusions' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

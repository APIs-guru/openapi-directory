from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import step


@dataclass_json
@dataclass
class ListStepsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    steps: Optional[List[step.Step]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    

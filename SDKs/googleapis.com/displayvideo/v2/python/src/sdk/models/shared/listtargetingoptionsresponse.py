from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import targetingoption


@dataclass_json
@dataclass
class ListTargetingOptionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    targeting_options: Optional[List[targetingoption.TargetingOption]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetingOptions' }})
    

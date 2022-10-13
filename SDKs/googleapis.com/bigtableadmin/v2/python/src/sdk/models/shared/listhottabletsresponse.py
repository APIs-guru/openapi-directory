from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hottablet


@dataclass_json
@dataclass
class ListHotTabletsResponse:
    hot_tablets: Optional[List[hottablet.HotTablet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hotTablets' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import region


@dataclass_json
@dataclass
class ListRegionsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    regions: Optional[List[region.Region]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regions' }})
    

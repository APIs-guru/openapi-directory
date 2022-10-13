from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import creative


@dataclass_json
@dataclass
class ListCreativesResponse:
    creatives: Optional[List[creative.Creative]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creatives' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

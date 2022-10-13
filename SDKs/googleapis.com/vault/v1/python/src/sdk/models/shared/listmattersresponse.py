from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matter


@dataclass_json
@dataclass
class ListMattersResponse:
    matters: Optional[List[matter.Matter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matters' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

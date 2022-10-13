from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import css


@dataclass_json
@dataclass
class ListCssesResponse:
    csses: Optional[List[css.CSS]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'csses' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

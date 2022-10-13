from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import export


@dataclass_json
@dataclass
class ListExportsResponse:
    exports: Optional[List[export.Export]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exports' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import lien


@dataclass_json
@dataclass
class ListLiensResponse:
    liens: Optional[List[lien.Lien]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'liens' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

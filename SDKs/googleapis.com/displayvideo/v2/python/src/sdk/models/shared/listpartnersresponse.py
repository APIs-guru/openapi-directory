from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import partner


@dataclass_json
@dataclass
class ListPartnersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    partners: Optional[List[partner.Partner]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'partners' }})
    

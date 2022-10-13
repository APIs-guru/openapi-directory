from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import sku


@dataclass_json
@dataclass
class ListSkusResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    skus: Optional[List[sku.Sku]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skus' }})
    

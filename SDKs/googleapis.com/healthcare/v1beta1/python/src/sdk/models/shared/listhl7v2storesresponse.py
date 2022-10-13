from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import hl7v2store


@dataclass_json
@dataclass
class ListHl7V2StoresResponse:
    hl7_v2_stores: Optional[List[hl7v2store.Hl7V2Store]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hl7V2Stores' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

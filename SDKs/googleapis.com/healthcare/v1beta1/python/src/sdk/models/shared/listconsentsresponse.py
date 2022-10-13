from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import consent


@dataclass_json
@dataclass
class ListConsentsResponse:
    consents: Optional[List[consent.Consent]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

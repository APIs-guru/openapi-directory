from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import verification


@dataclass_json
@dataclass
class ListVerificationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    verifications: Optional[List[verification.Verification]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'verifications' }})
    

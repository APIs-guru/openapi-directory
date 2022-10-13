from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import registration


@dataclass_json
@dataclass
class ListRegistrationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    registrations: Optional[List[registration.Registration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'registrations' }})
    

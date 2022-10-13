from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import attestor


@dataclass_json
@dataclass
class ListAttestorsResponse:
    attestors: Optional[List[attestor.Attestor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attestors' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import firebaseproject


@dataclass_json
@dataclass
class ListFirebaseProjectsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    results: Optional[List[firebaseproject.FirebaseProject]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    

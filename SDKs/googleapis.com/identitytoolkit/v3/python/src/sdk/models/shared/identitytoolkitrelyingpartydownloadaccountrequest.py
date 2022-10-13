from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IdentitytoolkitRelyingpartyDownloadAccountRequest:
    delegated_project_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'delegatedProjectNumber' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxResults' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    target_project_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetProjectId' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import formresponse


@dataclass_json
@dataclass
class ListFormResponsesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    responses: Optional[List[formresponse.FormResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responses' }})
    

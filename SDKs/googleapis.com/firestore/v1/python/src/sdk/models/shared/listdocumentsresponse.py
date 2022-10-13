from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import document


@dataclass_json
@dataclass
class ListDocumentsResponse:
    documents: Optional[List[document.Document]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documents' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleexamplelibraryagentv1book


@dataclass_json
@dataclass
class GoogleExampleLibraryagentV1ListBooksResponse:
    books: Optional[List[googleexamplelibraryagentv1book.GoogleExampleLibraryagentV1Book]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'books' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

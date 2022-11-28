from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleExampleLibraryagentV1ListBooksResponse:
    r"""GoogleExampleLibraryagentV1ListBooksResponse
    Response message for LibraryAgent.ListBooks.
    """
    
    books: Optional[List[GoogleExampleLibraryagentV1Book]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('books') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

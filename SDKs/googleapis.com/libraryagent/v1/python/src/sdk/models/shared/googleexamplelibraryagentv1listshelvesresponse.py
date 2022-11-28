from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleExampleLibraryagentV1ListShelvesResponse:
    r"""GoogleExampleLibraryagentV1ListShelvesResponse
    Response message for LibraryAgent.ListShelves.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    shelves: Optional[List[GoogleExampleLibraryagentV1Shelf]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shelves') }})
    

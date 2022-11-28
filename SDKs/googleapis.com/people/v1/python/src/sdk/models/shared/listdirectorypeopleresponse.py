from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDirectoryPeopleResponse:
    r"""ListDirectoryPeopleResponse
    The response to a request for the authenticated user's domain directory.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    next_sync_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextSyncToken') }})
    people: Optional[List[Person]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('people') }})
    

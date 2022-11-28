from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOtherContactsResponse:
    r"""ListOtherContactsResponse
    The response to a request for the authenticated user's \"Other contacts\".
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    next_sync_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextSyncToken') }})
    other_contacts: Optional[List[Person]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('otherContacts') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    

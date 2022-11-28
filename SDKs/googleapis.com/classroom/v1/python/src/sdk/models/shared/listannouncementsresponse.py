from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAnnouncementsResponse:
    r"""ListAnnouncementsResponse
    Response when listing course work.
    """
    
    announcements: Optional[List[Announcement]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('announcements') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

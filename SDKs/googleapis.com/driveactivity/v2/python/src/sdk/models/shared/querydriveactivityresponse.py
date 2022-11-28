from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class QueryDriveActivityResponse:
    r"""QueryDriveActivityResponse
    Response message for querying Drive activity.
    """
    
    activities: Optional[List[DriveActivity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activities') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListSessionsResponse:
    deleted_session: Optional[List[Session]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletedSession') }})
    has_more_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hasMoreData') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    session: Optional[List[Session]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('session') }})
    

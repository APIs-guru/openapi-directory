from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListHistoriesResponse:
    r"""ListHistoriesResponse
    Response message for HistoryService.List
    """
    
    histories: Optional[List[History]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('histories') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

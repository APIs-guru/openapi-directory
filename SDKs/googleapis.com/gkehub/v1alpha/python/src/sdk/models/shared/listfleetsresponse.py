from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListFleetsResponse:
    r"""ListFleetsResponse
    Response message for the `GkeHub.ListFleetsResponse` method.
    """
    
    fleets: Optional[List[Fleet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fleets') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListQueuedResourcesResponse:
    r"""ListQueuedResourcesResponse
    Response for ListQueuedResources.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    queued_resources: Optional[List[QueuedResource]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('queuedResources') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    

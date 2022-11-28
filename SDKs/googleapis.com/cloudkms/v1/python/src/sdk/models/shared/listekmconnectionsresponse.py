from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListEkmConnectionsResponse:
    r"""ListEkmConnectionsResponse
    Response message for EkmService.ListEkmConnections.
    """
    
    ekm_connections: Optional[List[EkmConnection]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ekmConnections') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    

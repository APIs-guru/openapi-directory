from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPeeringsResponse:
    r"""ListPeeringsResponse
    ListPeeringsResponse is the response message for ListPeerings method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    peerings: Optional[List[Peering]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('peerings') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    

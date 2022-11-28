from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListTunnelDestGroupsResponse:
    r"""ListTunnelDestGroupsResponse
    The response from ListTunnelDestGroups.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    tunnel_dest_groups: Optional[List[TunnelDestGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tunnelDestGroups') }})
    

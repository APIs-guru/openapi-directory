from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tunneldestgroup


@dataclass_json
@dataclass
class ListTunnelDestGroupsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tunnel_dest_groups: Optional[List[tunneldestgroup.TunnelDestGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tunnelDestGroups' }})
    

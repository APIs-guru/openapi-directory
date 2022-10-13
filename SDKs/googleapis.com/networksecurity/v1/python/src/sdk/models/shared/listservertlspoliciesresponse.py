from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import servertlspolicy


@dataclass_json
@dataclass
class ListServerTLSPoliciesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    server_tls_policies: Optional[List[servertlspolicy.ServerTLSPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverTlsPolicies' }})
    

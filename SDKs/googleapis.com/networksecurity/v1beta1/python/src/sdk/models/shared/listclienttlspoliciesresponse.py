from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clienttlspolicy


@dataclass_json
@dataclass
class ListClientTLSPoliciesResponse:
    client_tls_policies: Optional[List[clienttlspolicy.ClientTLSPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientTlsPolicies' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

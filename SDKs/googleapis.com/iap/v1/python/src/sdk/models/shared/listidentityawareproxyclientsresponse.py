from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import identityawareproxyclient


@dataclass_json
@dataclass
class ListIdentityAwareProxyClientsResponse:
    identity_aware_proxy_clients: Optional[List[identityawareproxyclient.IdentityAwareProxyClient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'identityAwareProxyClients' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

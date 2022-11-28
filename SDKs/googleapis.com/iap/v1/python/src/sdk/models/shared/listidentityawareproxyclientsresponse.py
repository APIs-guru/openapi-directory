from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListIdentityAwareProxyClientsResponse:
    r"""ListIdentityAwareProxyClientsResponse
    Response message for ListIdentityAwareProxyClients.
    """
    
    identity_aware_proxy_clients: Optional[List[IdentityAwareProxyClient]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('identityAwareProxyClients') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

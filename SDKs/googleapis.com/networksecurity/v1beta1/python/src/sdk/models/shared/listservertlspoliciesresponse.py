from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListServerTLSPoliciesResponse:
    r"""ListServerTLSPoliciesResponse
    Response returned by the ListServerTlsPolicies method.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    server_tls_policies: Optional[List[ServerTLSPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverTlsPolicies') }})
    

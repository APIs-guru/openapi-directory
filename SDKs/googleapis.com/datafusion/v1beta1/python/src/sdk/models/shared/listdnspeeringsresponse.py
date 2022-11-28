from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDNSPeeringsResponse:
    r"""ListDNSPeeringsResponse
    Response message for list DNS peerings.
    """
    
    dns_peerings: Optional[List[DNSPeering]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsPeerings') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

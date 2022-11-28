from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DNSKeysListResponse:
    r"""DNSKeysListResponse
    The response to a request to enumerate DnsKeys in a ManagedZone.
    """
    
    dns_keys: Optional[List[DNSKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsKeys') }})
    header: Optional[ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('header') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListDNSAuthorizationsResponse:
    r"""ListDNSAuthorizationsResponse
    Response for the `ListDnsAuthorizations` method.
    """
    
    dns_authorizations: Optional[List[DNSAuthorization]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dnsAuthorizations') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    

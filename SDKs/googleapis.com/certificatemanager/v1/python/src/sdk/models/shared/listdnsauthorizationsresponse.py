from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dnsauthorization


@dataclass_json
@dataclass
class ListDNSAuthorizationsResponse:
    dns_authorizations: Optional[List[dnsauthorization.DNSAuthorization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsAuthorizations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dnspeering


@dataclass_json
@dataclass
class ListDNSPeeringsResponse:
    dns_peerings: Optional[List[dnspeering.DNSPeering]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsPeerings' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import peereddnsdomain


@dataclass_json
@dataclass
class ListPeeredDNSDomainsResponse:
    peered_dns_domains: Optional[List[peereddnsdomain.PeeredDNSDomain]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'peeredDnsDomains' }})
    

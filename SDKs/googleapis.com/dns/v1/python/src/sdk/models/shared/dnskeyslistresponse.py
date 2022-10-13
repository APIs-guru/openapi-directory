from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dnskey
from . import responseheader


@dataclass_json
@dataclass
class DNSKeysListResponse:
    dns_keys: Optional[List[dnskey.DNSKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dnsKeys' }})
    header: Optional[responseheader.ResponseHeader] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    

from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tlsroute


@dataclass_json
@dataclass
class ListTLSRoutesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    tls_routes: Optional[List[tlsroute.TLSRoute]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tlsRoutes' }})
    

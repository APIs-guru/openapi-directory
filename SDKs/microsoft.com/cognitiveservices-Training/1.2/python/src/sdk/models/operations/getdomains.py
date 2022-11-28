from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDomainsHeaders:
    training_key: str = field(metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainsRequest:
    headers: GetDomainsHeaders = field()
    

@dataclass
class GetDomainsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    domains: Optional[List[shared.Domain]] = field(default=None)
    

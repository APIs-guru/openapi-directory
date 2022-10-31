from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetDomainsHeaders:
    training_key: str = field(default=None, metadata={'header': { 'field_name': 'Training-Key', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDomainsRequest:
    headers: GetDomainsHeaders = field(default=None)
    

@dataclass
class GetDomainsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    domains: Optional[List[shared.Domain]] = field(default=None)
    status_code: int = field(default=None)
    
